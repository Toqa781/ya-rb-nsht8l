import type { Application} from "./type";
import Badge from "../../Components/UI/Badge";
import { Link, useNavigate } from "react-router-dom";
import { statusTones } from "./statusTones";

type ApplicationTableProps={
    applications: Application[];
}

function ApplicationTable({applications}:ApplicationTableProps){
    const navigate=useNavigate();
    return(
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="w-full min-w-[900px] text-left text-[13px]">
                <thead className="border-b border-gay-200 bg-gray-50 text-gray-600">
                    <tr>
                        <th className="px-4 py-3 font-medium">Company</th>
                        <th className="px-4 py-3 font-medium">Job title</th>
                        <th className="px-4 py-3 font-medium">Location</th>
                        <th className="px-4 py-3 font-medium">Applied on</th>
                        <th className="px-4 py-3 font-medium">Salary range</th>
                        <th className="px-4 py-3 font-medium">Status</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {applications.map((app)=>(
                        <tr
                            key={app.id}
                            onClick={()=>navigate(`/applications/${app.id}/details`)}
                            className="transition-colors hover:bg-gray-50"
                        >
                            <td className="px-4 py-3 font-medium text-gray-900">
                                <div className="flex items-center gap-3">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 font-semibold text-indigo-600">
                                    {app.companyName.charAt(0).toUpperCase()}
                                </span>
                                <Link
                                    to={`/applications/${app.id}/details`}
                                    onClick={(event) => event.stopPropagation()}
                                    className="rounded hover:text-indigo-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                                >
                                    {app.companyName}
                                </Link>
                                </div>
                            </td>

                            <td className="px-4 py-3 text-gray-900">
                                {app.jobTitle}
                            </td>

                            <td className="px-4 py-3 text-gray-900">
                                {app.location}
                            </td>

                            <td className="whitespace-nowrap px-4 py-3 text-gray-500">
                                {app.appliedOn}
                            </td>

                            <td className="whitespace-nowrap px-4 py-3 text-gray-500">
                                {app.salaryRange ?? "-"}
                            </td>

                            <td className="px-4 py-3 text-gray-700">
                                <Badge tone={statusTones[app.status]}>
                                {app.status}
                                </Badge>
                            </td>

                        </tr>
                    ))}

                    {applications.length===0 &&(
                        <tr>
                            <td
                                colSpan={6}
                                className="px-4 py-12 text-center text-gray-500"
                            >
                                No applications found.

                            </td>
                        </tr>
                    )}

                </tbody>

            </table>

        </div>
    );
}
export default ApplicationTable;
