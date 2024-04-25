import { fetchFilteredCustomers } from '@/app/lib/data';
import Table from '../../ui/customers/table';
import Search from '@/app/ui/search';
import { lusitana } from '@/app/ui/fonts';

export default async function Page({
  searchParams }: {
    searchParams: { query: string; };
  }) {
    
  const { query } = searchParams;
  const customers = await fetchFilteredCustomers(query || '');

  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>
      <Search placeholder="Search customers..." />
      <Table customers={customers} />
    </div>
  );
}