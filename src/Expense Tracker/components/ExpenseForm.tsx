import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../categories";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters!" })
    .max(50),
  amount: z
    .number({ message: "Amount is required!" })
    .min(0.01, {
      message: "Amount should be at least 1",
    })
    .max(100_000),
  category: z.enum(categories, { message: "You should choose a category!" }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(schema),
  });

  return (
    <>
      <p className="bg-info p-4 mt-5 h1 text-warning">Expense Tracker</p>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data), reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Describtion
          </label>
          <input
            id="description"
            type="text"
            className="form-control"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            id="amount"
            type="number"
            className="form-control"
            {...register("amount", {
              valueAsNumber: true,
            })}
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            id="category"
            className="form-select"
            {...register("category")}
          >
            <option></option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default ExpenseForm;
