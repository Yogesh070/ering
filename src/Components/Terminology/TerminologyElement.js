import { useState } from "react";
import './Terminology.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Label from '../../images/aboutLine.svg'
import CustomSelect from './CustomSelect'
import { useFormik } from 'formik'





export default function Ter() {
    // const [selected, setSelected] = useState("Choose One");
    // const [sourceLanguageSelected, setSourceLanguageSelected] = useState("Choose source language");
    // const [targetLanguageSelected, setTargetLanguageSelected] = useState("Choose target language");

    const optionsDomain = [
        { value: 'Domain', label: 'Domain' },
        { value: 'All Domain', label: 'All Domain' },
        { value: 'Enginner', label: 'Enginner' },
    ]

    const optionsSource = [
        { value: 'English', label: 'English' },
        { value: 'French', label: 'French' },
        { value: 'Spanish', label: 'Spanish' },
    ]

    const optionsTarget = [
        { value: 'Spanish', label: 'Spanish' },
        { value: 'French', label: 'French' },
        { value: 'English', label: 'English' },
    ]

    const[show,setShow] = useState(false);

    const validate = values => {
        const errors = {}
    
        if (!values.text) {
            errors.text = 'Required'
        }
    
        if(!values.doman){
            errors.doman='Required'
        }

        if(!values.source){
            errors.source='Required'
        }

        if(!values.target){
            errors.target='Required'
        }
    
        return errors
    }
    
        const formik = useFormik({
    
        initialValues: {
            text: '',
            doman: '',
            source:'',
            target:''
        },
        validate,
        onSubmit: values => {
            console.log(values)
        }
    
    })
    

    return (
            <div className="app" id='terminology'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='container-fluid pb-5 bg-ter color-black pt-4'>
                        <div className='container s pt-5'>
                            <h1 className='text-center color-smoke-white small-text'><span><img src={Label} alt="" /></span> TERMINOLOGY</h1>
                            <h1 className='color-smoke-white mb-5 title-text'>ERMBASE - ENGLISH &lt; &gt; FRENCH</h1>
                            <div class="row justify-content-center">
                                <div class="col-md-4 col-sm-12">
                                    <label for="term" class="form-label label-text">Which Term? <span className='color-red'>*</span></label>
                                    <input 
                                    id="text"
                                    name="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.text}
                                    type="text" class="form-control text-white" placeholder="Term"/>
                                    {formik.errors.text ? <div className='error'>{formik.errors.text}</div> : null}
                                    <br />

                                </div>
                                <div class="col-md-4 col-sm-12">
                                    <label for="term" class="form-label label-text">Domain</label>
                                    <CustomSelect
                                    className='input'
                                    onChange={value=>formik.setFieldValue('doman',value.value)}
                                    value={formik.values.doman}
                                    options={optionsDomain}
                                    />
                                    {formik.errors.doman ? <div className='error'>{formik.errors.doman}</div> : null}

                                    <br />
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-md-4 col-sm-12">
                                    <label for="term" class="form-label label-text ">Source Language</label>
                                    <CustomSelect
                                    className='input'
                                    onChange={value=>formik.setFieldValue('source',value.value)}
                                    value={formik.values.source}
                                    options={optionsSource}
                                    />
                                    {formik.errors.source ? <div className='error'>{formik.errors.source}</div> : null}
                                    <br />
                                </div>
                                <div class="col-md-4 col-sm-12">
                                    <label for="term" class="form-label label-text ">Target Language</label>
                                    <CustomSelect
                                    className='input'
                                    onChange={value=>formik.setFieldValue('target',value.value)}
                                    value={formik.values.target}
                                    options={optionsTarget}
                                    />
                                    {formik.errors.target ? <div className='error'>{formik.errors.target}</div> : null}
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-md-4 col-sm-12 pt-5 pb-5">
                                    <button type="submit" onClick={()=>setShow(true)} className='form-control color-yellow'>Launch</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

        {/*Results Found  */}
            {show? <div className='color-black'>
                    <div className='container p-0 pb-3 pt-3 color-smoke-white'>2 Result(s) found</div>

                    {/* 1 result */}
                    <div id='rounded-bottom' className='container p-0 color-black'>
                        <div className='col'>
                            <div id='rounded-top' className='padding-title color-yellow text-white padding-left'>
                                <span className='padding-left'>Ani</span>
                            </div>
                            <div className='container p-5'>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="container p-0 color-box">
                                            <p class="color-grey padding-title ">FRENCH</p>
                                            <div class="card-body text-white">
                                                <h5 className='card-title p-0'>Ami</h5>
                                                <p class="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                                <p class="card-text">Domains</p>
                                                <p class="card-text color-dark-grey">Généralités</p>
                                            </div>
                                        </div>
                                        <br />
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="container p-0 color-box">
                                            <p class="color-grey padding-title "> {formik.values.doman}</p>
                                            <div class="card-body text-white">
                                                <h5 className='card-title p-0'>Friend</h5>
                                                <p class="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                                <p class="card-text">Domains</p>
                                                <p class="card-text color-dark-grey">Généralités</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    {/* 2 result */}

                    <div id='rounded-bottom' className='container p-0 color-black'>
                        <div className='col'>
                            <div id='rounded-top' className='padding-title color-yellow text-white'>
                                <span className='padding-left'>Mon bon ami</span>
                            </div>
                            <div className='container p-5'>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="container p-0 color-box">
                                            <p  class="color-grey padding-title ">FRENCH</p>
                                            <div class="card-body text-white">
                                                <h5 className='card-title p-0'>Ami</h5>
                                                <p class="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                                <p class="card-text">Domains</p>
                                                <p class="card-text color-dark-grey">Généralités</p>
                                            </div>
                                        </div>
                                        <br />
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="container p-0 color-box">
                                            <p class="color-grey padding-title ">English</p>
                                            <div class="card-body text-white">
                                                <h5 className='card-title p-0'>Friend</h5>
                                                <p class="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                                <p class="card-text">Domains</p>
                                                <p class="card-text color-dark-grey">Généralités</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>

                </div> :null 
            }
            
            </div>
    );
}