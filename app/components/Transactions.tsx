interface Transaction {
    date: string
    description: string
    amount: string
    status: "Completed" | "Pending" | "Failed"
  }
  
  const transactions: Transaction[] = [
    { date: "Jun 01", description: "Received Payment", amount: "+$500", status: "Completed" },
    { date: "May 21", description: "Received Payment", amount: "+$500", status: "Completed" },
    { date: "May 15", description: "Received Payment", amount: "+$500", status: "Completed" },
    { date: "May 09", description: "Received Payment", amount: "+$500", status: "Completed" },
  ]
  
  export default function RecentTransactions() {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-slate-700">
        <h2 className="text-lg font-semibold mb-4 text-slate-800 dark:text-white">
          Recent transactions
        </h2>
  
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500 dark:text-slate-400 border-b border-gray-200 dark:border-slate-700">
                <th className="pb-3">Date</th>
                <th className="pb-3">Description</th>
                <th className="pb-3">Amount</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
  
            <tbody>
              {transactions.map((t, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-100 dark:border-slate-700 last:border-none"
                >
                  <td className="py-3 text-slate-800 dark:text-slate-200">{t.date}</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300">{t.description}</td>
                  <td className="py-3 font-medium text-slate-800 dark:text-slate-100">
                    {t.amount}
                  </td>
                  <td className="py-3">
                    <span
                      className={`
                        px-3 py-1 text-xs font-medium rounded-full
                        ${
                          t.status === "Completed"
                            ? "bg-green-100 text-green-700 dark:bg-green-700/20 dark:text-green-300"
                            : t.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-700/20 dark:text-yellow-300"
                            : "bg-red-100 text-red-700 dark:bg-red-700/20 dark:text-red-300"
                        }
                      `}
                    >
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }