import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import AddPage from './Add';
import OrdersPage from './Orders';

const AuthTabs = () => {
  return (
    <Tabs defaultValue='login' className='w-[400px]'>
      <TabsList className='grid w-full grid-cols-4 gap-2'>
        <TabsTrigger value='login'>Login</TabsTrigger>
        <TabsTrigger value='register'>Register</TabsTrigger>
        <TabsTrigger value='add'>add</TabsTrigger>
        <TabsTrigger value='orders'>orders</TabsTrigger>
      </TabsList>
      <TabsContent value='login'>
        <LoginForm />
      </TabsContent>
      <TabsContent value='register'>
        <RegisterForm />
      </TabsContent>

      <TabsContent value='add'>
        <AddPage />
      </TabsContent>
      <TabsContent value='orders'>
        <OrdersPage />
      </TabsContent>
    </Tabs>
  );
};

export default AuthTabs;