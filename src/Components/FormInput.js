import React from 'react'
import PropTypes from 'prop-types'

const FormInput = props => {
    // ovo ispod ce biti value u propsu dole, znaci name je u zagradama, type je u zagradama itd
    const {
        name,
        type,
        title,
        value,
        onChange
    } = props;

    return (
        <div className='input-groups'>
            <span className="label">{title}</span>
            <div className="range-container">
                <input type={type} name={name} className='range-input' value={value} onChange={onChange} autoComplete='false' />
            </div>
        </div>
    )
}

FormInput.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['text'])
}

export default FormInput;