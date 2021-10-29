import Dropdown from "./Dropdown";
import SourceLanguageDropdown from "./SourceLanguageDropdown";
import TargetLanguageDropdown from "./TargetLanguageDropdown";
import { useState } from "react";
import './Terminology.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './DropdownCustom.css'

export default function Ter() {
  const [selected, setSelected] = useState("Choose One");
  const [sourceLanguageSelected, setSourceLanguageSelected] = useState("Choose source language");
  const [targetLanguageSelected, setTargetLanguageSelected] = useState("Choose target language");


  return (
            <div className="app" id='terminology'>
                <div className='container-fluid color-black pt-4'>
                    <div className='container s pt-5'>
                        <div class="row justify-content-center">
                            <div class="col-md-4 col-sm-12">
                                <label for="term" class="form-label label-text">Which Term? <span className='color-red'>*</span></label>
                                <input type="text" class="form-control text-white" placeholder="Term"/>
                                <br />
                            </div>
                            <div class="col-md-4 col-sm-12">
                                <label for="term" class="form-label label-text">Domain</label>
                                <Dropdown selected={selected} setSelected={setSelected} />
                                <br />
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-4 col-sm-12">
                                <label for="term" class="form-label label-text ">Source Language</label>
                                <SourceLanguageDropdown selected={sourceLanguageSelected} setSelected={setSourceLanguageSelected} />      
                                <br />
                            </div>
                            <div class="col-md-4 col-sm-12">
                                <label for="term" class="form-label label-text ">Target Language</label>
                                <TargetLanguageDropdown selected={targetLanguageSelected} setSelected={setTargetLanguageSelected} />
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-4 col-sm-12 pt-5 pb-5">
                                <button className='form-control color-yellow'>Launch</button>
                            </div>
                        </div>
                    </div>
                </div>

        {/*Results Found  */}
                <div className='color-black'>
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
                                            <p class="color-grey padding-title "> {selected}</p>
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

                </div>     
            </div>
  );
}