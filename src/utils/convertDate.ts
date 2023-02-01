import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export const ConvertDate = (date: string) => {
  const convertToDateFormat = new Date(date);
  const formatedDate = formatDistanceToNow(convertToDateFormat, {
    locale: ptBR,
    addSuffix: true,
  });

  return formatedDate;
};
