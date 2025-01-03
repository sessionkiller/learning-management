import { useGetCourseQuery } from "@/state/api";
import { useSearchParams } from "next/navigation";

export const useCurrentCourse = () => {
  const searchParamas = useSearchParams();
  const courseId = searchParamas.get("id") ?? "";
  const { data: course, ...rest } = useGetCourseQuery(courseId);

  return { course, courseId, ...rest };
};
