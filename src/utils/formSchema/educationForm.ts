import { SchemaField } from "@/components/forms/SchemaForm/Schema.type";

export const educationFormNITAPSchema: SchemaField[] = [
  {
    name: "institute",
    label: "Institute",
    type: "text",
    required: "Institute is requried",
    disabled: true,
  },
  {
    name: "degree",
    label: "Degree",
    type: "select",
    required: "Degree is required",
    options: [
      { value: "Bachelor of Technology", label: "B.Tech" },
      { value: "Master of Technology", label: "M.Tech" },
      { value: "PhD", label: "PhD" },
    ],
  },
  {
    name: "type",
    label: "Degree type",
    type: "select",
    options: [
      { value: "Full time", label: "Full time" },
      { value: "Part time", label: "Part time" },
    ],
    required: "Degree type is required",
  },
  {
    name: "discipline",
    label: "Discipline (Field of study)",
    type: "text",
    required: "Discipline is required",
  },
  {
    name: "start_date",
    label: "Start date",
    type: "date",
    required: "Start date is required",
  },
  {
    name: "end_date",
    label: "End date",
    type: "date",
    required: "End date is required",
  },
  { name: "description", label: "Description", type: "textarea" },
];
export const educationFormSchema: SchemaField[] = [
  {
    name: "institute",
    label: "Institute (Ex. IIT Madras)",
    type: "text",
    required: "Institute is requried",
  },
  {
    name: "degree",
    label: "Degree",
    type: "text",
    required: "Degree is required",
  },
  {
    name: "type",
    label: "Degree type",
    type: "select",
    options: [
      { value: "Full time", label: "Full time" },
      { value: "Part time", label: "Part time" },
    ],
    required: "Degree type is required",
  },
  {
    name: "discipline",
    label: "Discipline (Field of study)",
    type: "text",
    required: "Discipline is required",
  },
  {
    name: "start_date",
    label: "Start date",
    type: "date",
    required: "Start date is required",
  },
  {
    name: "end_date",
    label: "End date (or expected)",
    type: "date",
    required: "End date is required",
  },
  { name: "description", label: "Description", type: "textarea" },
];
