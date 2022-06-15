import { InputHTMLAttributes } from 'react';
import { SizeTypes } from '../interfaces';
export interface GenericInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  /*Size types of input can exist*/
  sizes?: SizeTypes;
  /*Error message*/
  isError?: boolean;
}
export interface InputProps extends GenericInputProps {
  /*Variant types of input can exist*/
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
}
export interface CheckboxesProps {
  checkboxes: CheckboxProps[];
  isMultiple: boolean;
  value: any;
  onChange?: (value: { [key: string]: any } | { [key: string]: any }[]) => void;
  listType?:
    | '3-column'
    | '2-column'
    | '1-column'
    | '4-column'
    | '5-column'
    | '6-column'
    | '1-row'
    | '2-row'
    | '3-row'
    | '4-row'
    | '5-row'
    | '6-row';
}
export interface RadiosProps {
  radios: CheckboxProps[];
  value: any;
  onChange?: (value: { [key: string]: any }) => void;
  listType?:
    | '3-column'
    | '2-column'
    | '1-column'
    | '4-column'
    | '5-column'
    | '6-column'
    | '1-row'
    | '2-row'
    | '3-row'
    | '4-row'
    | '5-row'
    | '6-row';
}
export interface CheckboxProps extends Omit<GenericInputProps, 'type'> {
  label: string;
}
export interface RadioProps extends Omit<GenericInputProps, 'type'> {
  label: string;
}
