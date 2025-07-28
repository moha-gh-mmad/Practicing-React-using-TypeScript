import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters!" }),
  age: z.number({ message: "Age field is required!" }).min(18, {
    message: "Age must be at leats 18!",
  }),
});

type FormData = z.infer<typeof schema>;

// interface FormData {
//   name: string;
//   age: number;
// }
// this interface makes the errors property in the register function show us our form input names when putting a dot after it. we have to put the name of this interface in front of useForm Hook like this: "<interface>".

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register(
            "name"
            //     {
            //     required: true,
            //     minLength: 3,
            //   }
          )}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name /* ?.type === "required" */ && (
          <p className="text-danger">{errors.name.message}</p>
        )}
        {/* {errors.name?.type === "minLength" && (
          <p className="text-danger">
            The length must be at least 3 characters!
          </p>
        )}  */}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>

      <button disabled={!isValid} className="btn btn-success">
        Submit Using React Hook Form
      </button>
    </form>
  );
};

export default ReactHookForm;
