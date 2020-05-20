import React from 'react'
import InputStyle from './style'

/*
 * @params  disabled    boolean             输入框是否禁用
 * @params  value       string | number     输入框支
 * @params  type        string              输入框类型
 * @params  maxLength   number              最长长度
 * @params  placeholder string              输入框提示
 *
 * @function  onChange      function
 * @function  onConfirm     function
 */
export default function (props) {
	
	const {
		disabled = false,
		value = '',
		type = 'text',
		maxLength = 200,
		placeholder = '请输入',
	} = props
	
	const [_selfValue, setSelfValue] = React.useState(value)
	
	function onChange (e) {
		props.onChange(e.value)
		setSelfValue(e.value)
	}
	
	return (
		<InputStyle>
			<input onChange={ (e) => onChange(e.target) } maxLength={ maxLength } type={ type } value={ _selfValue }
			       readOnly={ props.readOnly || false }
			       placeholder={ placeholder } disabled={ disabled }/>
		</InputStyle>
		
	)
}
