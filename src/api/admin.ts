import pocketbase from "./pocketbase";

/* EXPORTS */

export { login, getUser, logout };
export { User };

/* FUNCTIONS */

async function login(email: string, pwd: string): Promise<User | null> {
  return get_user_info(() => pocketbase.users.authViaEmail(email, pwd));
}

async function getUser(): Promise<User | null> {
  return get_user_info(() => pocketbase.users.refresh());
}

async function logout() {
  await pocketbase.authStore.clear();
}

async function get_user_info(func: () => Promise<any>): Promise<User | null> {
  try {
    const { user: pb_user } = await func();
    // console.log(pb_user);

    const user: User = {
      mail: pb_user.email,
      name: pb_user.profile?.name,
    };

    return user;
  } catch (e) {
    return null;
  }
}

/* TYPES */

type User = {
  mail: string;
  name: string;
};
