import React from 'react'
import Navbar from "../Components/Navbar";
import PluginHeader from '../Components/PluginHeader';
import PluginNavbar from '../Components/PluginNavbar';
import FilterPlugins from '../Components/FilterPlugins';

const PluginsPage = () => {
    return (
        <div>

            <PluginNavbar />
            {/* <PluginHeader /> */}
            <FilterPlugins />
        </div>
    )
}

export default PluginsPage;