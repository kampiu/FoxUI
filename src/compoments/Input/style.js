import styled from 'styled-components'

export default styled.div`
	width: 200px;
	height: 30px;
	display: flex;
	input{
		width: 100%;
		height: 100%;
		appearance: none;
		outline: none;
	    box-sizing: border-box;
	    margin: 0;
	    font-variant: tabular-nums;
	    list-style: none;
	    -webkit-font-feature-settings: 'tnum';
	    font-feature-settings: 'tnum';
	    position: relative;
	    min-width: 0;
	    padding: 4px 11px;
	    color: rgba(0,0,0,.65);
	    font-size: 14px;
	    line-height: 1.5715;
	    background-color: #fff;
	    background-image: none;
	    border: 1px solid #d9d9d9;
	    border-radius: 2px;
	    transition: all .3s;
	}
`
