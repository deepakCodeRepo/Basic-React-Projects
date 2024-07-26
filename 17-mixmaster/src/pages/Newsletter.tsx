import axios, { AxiosError } from "axios";
import {
  Form,
  redirect,
  ActionFunction,
  useNavigation,
} from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action: ActionFunction = async ({ request }) => {
  // console.log(request);
  const formData = await request.formData();
  // console.log([...formData.entries()]);
  const data = Object.fromEntries(formData);
  console.log(data);

  try {
    const response = await axios.post(newsletterUrl, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);

    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
    toast.error("An unknown error occurred");
    return error;
  }
};

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form className="form" method="POST">
        <h4>our newsletter</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            first name
          </label>
          <input type="text" className="form-input" name="name" id="name" />
        </div>
        <div className="form-row">
          <label htmlFor="lastName" className="form-label">
            last name
          </label>
          <input
            type="text"
            className="form-input"
            name="lastName"
            id="lastName"
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="text"
            className="form-input"
            name="email"
            id="email"
            defaultValue="test@test.com"
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "submitting" : "submit"}
        </button>
      </Form>
    </Wrapper>
  );
};

export default Newsletter;

const Wrapper = styled.section`
  .form {
    width: 100%;
    max-width: var(--fixed-width);
    background: var(--white);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
    padding: 2rem 2.5rem;
    margin: 3rem auto;
  }
  h4 {
    font-size: clamp(1rem, 2vw, 2rem);
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 400;
    line-height: 1;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }
  .form-row {
    margin-bottom: 1rem;
  }
  .form-label {
    display: block;
    font-size: var(--small-text);
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }
  .form-input {
    width: 100%;
    padding: 0.375rem 0.75rem;
    border-radius: var(--borderRadius);
    background: var(--backgroundColor);
    border: 1px solid var(--grey-200);
  }
  button {
    cursor: pointer;
    margin-top: 0.5rem;
    width: 100%;
    color: var(--white);
    background: var(--primary-500);
    border: transparent;
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
    padding: 0.375rem 0.75rem;
    box-shadow: var(--shadow-1);
    transition: var(--transition);
    text-transform: capitalize;
    display: inline-block;
  }
`;
