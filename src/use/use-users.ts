import { useContext } from '@builder.io/qwik'
import { UsersContext } from '~/routes/users/layout';

export const useUsers = () => useContext(UsersContext);
