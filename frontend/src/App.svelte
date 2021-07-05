<script>
  import client from "./graphql-client";
  import gql from "graphql-tag";

  let user = {
    name: "",
	email: "",
	signup_in_class_id: 2,
	password: "",
	yoga_year: 3
  };

  async function insertUser() {
    const mutation = gql`
      mutation createUser(
        $name: String!
        $email: String!
        $signup_in_class_id: Int!
        $password: String!
		$yoga_year: Int!
      ) {
        createUsertable(
          input: { usertable: {
            name: $name
            email: $email
            signupInClassId: $signup_in_class_id
            password: $password
			yogaYear: $yoga_year
		  }
          }
        )
		{
			clientMutationId
		}
      }
    `;
    client.mutate({
      mutation,
      variables: {
        name: user.name,
        email: user.email,
        signup_in_class_id: user.signup_in_class_id,
        password: user.password,
		yoga_year: user.yoga_year
      },
    });
  }

  async function updateUser(user) {
    const mutation = gql`
      mutation updateUser(
        $name: String!
        $email: String!
      ) {
        updateUsertable(
          input: { patch: { name: $name }, email: $email }
        ) {
          clientMutationId
        }
      }
    `;    
    client.mutate({
      mutation,
      variables: {
        name: user.name,
        email: user.email
      },
    });
  }

  const query = gql`
    subscription MySub {
      usertables {
        nodes {
          email
          gender
          name
          yogaYear
          myRole
        }
      }
    }
  `;

  const userstore = client.subscribe({
    query,
  });
  
</script>

<main>
  <form on:submit|preventDefault={insertUser}>
	 <!-- <input placeholder="User Signup in class with id" type="number" bind:value={user.signup_in_class_id} /> -->
    <input placeholder="User Name" bind:value={user.name} />
    <input placeholder="User Email" bind:value={user.email} />
    <input placeholder="User Password" bind:value={user.password} />
    <input placeholder="User Yoga year" bind:value={user.yoga_year} />
    <button type="submit">Submit</button>
  </form>
</main>

{#if $userstore && $userstore.data}
  <table>
    <thead>
      <tr>
        <!-- <th>class ID</th> -->
        <th>Name</th>
        <th>Email</th>
        <th>Password</th>

      </tr>
    </thead>
    <tbody>
      {#each $userstore.data.usertables.nodes as t}
        <tr>
          <!-- <td>{t.signupInClassId}</td> -->
          <td>{t.name}</td>
          <td>{t.email}</td>
          <td>{t.password}</td>
          <td>{t.myRole}</td>
          <td>{t.yogaYear}</td>
          <td>
            <label>
              <input
                type="checkbox"
                bind:checked={t.completed}
                on:change={() => updateUser(t)}
              />
              {t.completed ? "done" : "pending"}
            </label>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
{/if}

<style>
	table {
		width: 100%;
	}

	td, th {
		width: 100px;
		text-align: center;
	}

	th {
		height: 50px;
	}
</style>
