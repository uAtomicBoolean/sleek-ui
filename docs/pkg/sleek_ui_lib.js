/* @ts-self-types="./sleek_ui_lib.d.ts" */

export function main() {
    wasm.main();
}
function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg_Window_c7f91e3f80ae0a0e: function(arg0) {
            const ret = arg0.Window;
            return ret;
        },
        __wbg___wbindgen_boolean_get_edaed31a367ce1bd: function(arg0) {
            const v = arg0;
            const ret = typeof(v) === 'boolean' ? v : undefined;
            return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
        },
        __wbg___wbindgen_debug_string_8a447059637473e2: function(arg0, arg1) {
            const ret = debugString(arg1);
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_is_function_acc5528be2b923f2: function(arg0) {
            const ret = typeof(arg0) === 'function';
            return ret;
        },
        __wbg___wbindgen_is_undefined_721f8decd50c87a3: function(arg0) {
            const ret = arg0 === undefined;
            return ret;
        },
        __wbg___wbindgen_string_get_71bb4348194e31f0: function(arg0, arg1) {
            const obj = arg1;
            const ret = typeof(obj) === 'string' ? obj : undefined;
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_throw_ea4887a5f8f9a9db: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbg__wbg_cb_unref_33c39e13d73b25f6: function(arg0) {
            arg0._wbg_cb_unref();
        },
        __wbg_abort_6e6ea7d259504afc: function(arg0) {
            arg0.abort();
        },
        __wbg_activeElement_39e967783d67360b: function(arg0) {
            const ret = arg0.activeElement;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_activeTexture_1d5359b20df41710: function(arg0, arg1) {
            arg0.activeTexture(arg1 >>> 0);
        },
        __wbg_activeTexture_525ee3068cb9e8d5: function(arg0, arg1) {
            arg0.activeTexture(arg1 >>> 0);
        },
        __wbg_addEventListener_ea90bc131475777e: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            arg0.addEventListener(getStringFromWasm0(arg1, arg2), arg3);
        }, arguments); },
        __wbg_addListener_ddaa585636995443: function() { return handleError(function (arg0, arg1) {
            arg0.addListener(arg1);
        }, arguments); },
        __wbg_altKey_7412dd64f8c921c7: function(arg0) {
            const ret = arg0.altKey;
            return ret;
        },
        __wbg_altKey_bd27feb84dabed76: function(arg0) {
            const ret = arg0.altKey;
            return ret;
        },
        __wbg_animate_8f41e2f47c7d04ab: function(arg0, arg1, arg2) {
            const ret = arg0.animate(arg1, arg2);
            return ret;
        },
        __wbg_appendChild_acb7691406591783: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.appendChild(arg1);
            return ret;
        }, arguments); },
        __wbg_attachShader_3477e67517b09b6b: function(arg0, arg1, arg2) {
            arg0.attachShader(arg1, arg2);
        },
        __wbg_attachShader_683d1070365e7066: function(arg0, arg1, arg2) {
            arg0.attachShader(arg1, arg2);
        },
        __wbg_before_e683411289ff0010: function() { return handleError(function (arg0, arg1) {
            arg0.before(arg1);
        }, arguments); },
        __wbg_bindAttribLocation_79b5d26727094518: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.bindAttribLocation(arg1, arg2 >>> 0, getStringFromWasm0(arg3, arg4));
        },
        __wbg_bindAttribLocation_d56d3c40331af7ed: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.bindAttribLocation(arg1, arg2 >>> 0, getStringFromWasm0(arg3, arg4));
        },
        __wbg_bindBuffer_d3111de6861cb875: function(arg0, arg1, arg2) {
            arg0.bindBuffer(arg1 >>> 0, arg2);
        },
        __wbg_bindBuffer_e95efaf0d4851845: function(arg0, arg1, arg2) {
            arg0.bindBuffer(arg1 >>> 0, arg2);
        },
        __wbg_bindFramebuffer_217a1f4d28c6bc77: function(arg0, arg1, arg2) {
            arg0.bindFramebuffer(arg1 >>> 0, arg2);
        },
        __wbg_bindFramebuffer_63e837a5dc0accfb: function(arg0, arg1, arg2) {
            arg0.bindFramebuffer(arg1 >>> 0, arg2);
        },
        __wbg_bindRenderbuffer_7f84d28a1462a95a: function(arg0, arg1, arg2) {
            arg0.bindRenderbuffer(arg1 >>> 0, arg2);
        },
        __wbg_bindRenderbuffer_d608b211c51ed147: function(arg0, arg1, arg2) {
            arg0.bindRenderbuffer(arg1 >>> 0, arg2);
        },
        __wbg_bindTexture_7ab28ff4ff3dc506: function(arg0, arg1, arg2) {
            arg0.bindTexture(arg1 >>> 0, arg2);
        },
        __wbg_bindTexture_ffc56f1e5c5526c6: function(arg0, arg1, arg2) {
            arg0.bindTexture(arg1 >>> 0, arg2);
        },
        __wbg_bindVertexArrayOES_1cb63a86715ea7d5: function(arg0, arg1) {
            arg0.bindVertexArrayOES(arg1);
        },
        __wbg_bindVertexArray_c391bd47303d75cd: function(arg0, arg1) {
            arg0.bindVertexArray(arg1);
        },
        __wbg_blendFuncSeparate_3eef699c291dbc87: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.blendFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
        },
        __wbg_blendFuncSeparate_456410f9919bed39: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.blendFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
        },
        __wbg_blockSize_ec8ab846ac2b2395: function(arg0) {
            const ret = arg0.blockSize;
            return ret;
        },
        __wbg_body_c94f9310613c153b: function(arg0) {
            const ret = arg0.body;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_brand_3bc196a43eceb8af: function(arg0, arg1) {
            const ret = arg1.brand;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_brands_b7dcf262485c3e7c: function(arg0) {
            const ret = arg0.brands;
            return ret;
        },
        __wbg_bufferData_26132561617ce8fb: function(arg0, arg1, arg2, arg3) {
            arg0.bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
        },
        __wbg_bufferData_99bbbc63f02251c4: function(arg0, arg1, arg2, arg3) {
            arg0.bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
        },
        __wbg_button_bb3285fcdf965178: function(arg0) {
            const ret = arg0.button;
            return ret;
        },
        __wbg_buttons_c15069bb056ecbe0: function(arg0) {
            const ret = arg0.buttons;
            return ret;
        },
        __wbg_cancelAnimationFrame_32c0ef91e4077228: function() { return handleError(function (arg0, arg1) {
            arg0.cancelAnimationFrame(arg1);
        }, arguments); },
        __wbg_cancelIdleCallback_d2ed70e82f4d3a29: function(arg0, arg1) {
            arg0.cancelIdleCallback(arg1 >>> 0);
        },
        __wbg_cancel_65f38182e2eeac5c: function(arg0) {
            arg0.cancel();
        },
        __wbg_catch_2bb4b6f2fafb00e7: function(arg0, arg1) {
            const ret = arg0.catch(arg1);
            return ret;
        },
        __wbg_checkFramebufferStatus_aa8624bacd64d024: function(arg0, arg1) {
            const ret = arg0.checkFramebufferStatus(arg1 >>> 0);
            return ret;
        },
        __wbg_checkFramebufferStatus_eea40883c38f818f: function(arg0, arg1) {
            const ret = arg0.checkFramebufferStatus(arg1 >>> 0);
            return ret;
        },
        __wbg_clearColor_0ae8a95dc1112d5f: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.clearColor(arg1, arg2, arg3, arg4);
        },
        __wbg_clearColor_558fc33a31712f6f: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.clearColor(arg1, arg2, arg3, arg4);
        },
        __wbg_clearTimeout_ef73c3ecbb0ece69: function(arg0, arg1) {
            arg0.clearTimeout(arg1);
        },
        __wbg_clear_dadcb3e2929388b0: function(arg0, arg1) {
            arg0.clear(arg1 >>> 0);
        },
        __wbg_clear_ff8cfdf420f7dde6: function(arg0, arg1) {
            arg0.clear(arg1 >>> 0);
        },
        __wbg_clientHeight_af66ce6b5259204b: function(arg0) {
            const ret = arg0.clientHeight;
            return ret;
        },
        __wbg_clientWidth_128226e900ef22eb: function(arg0) {
            const ret = arg0.clientWidth;
            return ret;
        },
        __wbg_clipboardData_f585b6a1c3e5334c: function(arg0) {
            const ret = arg0.clipboardData;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_close_38d22e2ee9732188: function(arg0) {
            arg0.close();
        },
        __wbg_code_87bb99fdec02d313: function(arg0, arg1) {
            const ret = arg1.code;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_colorMask_b0ab9d429a1efa0a: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.colorMask(arg1 !== 0, arg2 !== 0, arg3 !== 0, arg4 !== 0);
        },
        __wbg_colorMask_f111e3e5796458f4: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.colorMask(arg1 !== 0, arg2 !== 0, arg3 !== 0, arg4 !== 0);
        },
        __wbg_compileShader_f5625b583b2c9fd6: function(arg0, arg1) {
            arg0.compileShader(arg1);
        },
        __wbg_compileShader_fcf3f3d2891f73f9: function(arg0, arg1) {
            arg0.compileShader(arg1);
        },
        __wbg_contains_aeb13d2d343b24e8: function(arg0, arg1) {
            const ret = arg0.contains(arg1);
            return ret;
        },
        __wbg_contentRect_0fb8c8900d689a0c: function(arg0) {
            const ret = arg0.contentRect;
            return ret;
        },
        __wbg_createBuffer_0e42c2e1f7bbaeeb: function(arg0) {
            const ret = arg0.createBuffer();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createBuffer_9f602b2dbcbf409c: function(arg0) {
            const ret = arg0.createBuffer();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createElement_9e23ac95e40e302c: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.createElement(getStringFromWasm0(arg1, arg2));
            return ret;
        }, arguments); },
        __wbg_createFramebuffer_4a250944a4542bbc: function(arg0) {
            const ret = arg0.createFramebuffer();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createFramebuffer_ab73f30b5dc97415: function(arg0) {
            const ret = arg0.createFramebuffer();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createObjectURL_d8fd80787743974d: function() { return handleError(function (arg0, arg1) {
            const ret = URL.createObjectURL(arg1);
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_createProgram_4c8164d471c10346: function(arg0) {
            const ret = arg0.createProgram();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createProgram_f11c63f59f41b82a: function(arg0) {
            const ret = arg0.createProgram();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createRenderbuffer_556000dbb01f5026: function(arg0) {
            const ret = arg0.createRenderbuffer();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createRenderbuffer_5ada3a0bc7cf3a43: function(arg0) {
            const ret = arg0.createRenderbuffer();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createShader_27d9388313f3b14e: function(arg0, arg1) {
            const ret = arg0.createShader(arg1 >>> 0);
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createShader_9c5cd42709d915ff: function(arg0, arg1) {
            const ret = arg0.createShader(arg1 >>> 0);
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createTexture_3eed23cb87dd35fc: function(arg0) {
            const ret = arg0.createTexture();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createTexture_8455c703424c567b: function(arg0) {
            const ret = arg0.createTexture();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createVertexArrayOES_4bbd1b38563aab57: function(arg0) {
            const ret = arg0.createVertexArrayOES();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createVertexArray_8685feb21901c932: function(arg0) {
            const ret = arg0.createVertexArray();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_ctrlKey_00097886a21597a7: function(arg0) {
            const ret = arg0.ctrlKey;
            return ret;
        },
        __wbg_ctrlKey_e2bcba26214642c1: function(arg0) {
            const ret = arg0.ctrlKey;
            return ret;
        },
        __wbg_cullFace_774780fb4177aab8: function(arg0, arg1) {
            arg0.cullFace(arg1 >>> 0);
        },
        __wbg_cullFace_94f24b4fd5e9038b: function(arg0, arg1) {
            arg0.cullFace(arg1 >>> 0);
        },
        __wbg_currentSrc_e741264bcab9a9f2: function(arg0, arg1) {
            const ret = arg1.currentSrc;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_data_62e44d0647c142ea: function(arg0, arg1) {
            const ret = arg1.data;
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_data_bcb276ecf1646f93: function(arg0, arg1) {
            const ret = arg1.data;
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_dataset_e9df32b03741e569: function(arg0) {
            const ret = arg0.dataset;
            return ret;
        },
        __wbg_deleteBuffer_d0fb5f1492ee8c6f: function(arg0, arg1) {
            arg0.deleteBuffer(arg1);
        },
        __wbg_deleteBuffer_d758283bea6e0ccf: function(arg0, arg1) {
            arg0.deleteBuffer(arg1);
        },
        __wbg_deleteFramebuffer_4c0996be4bc30a67: function(arg0, arg1) {
            arg0.deleteFramebuffer(arg1);
        },
        __wbg_deleteFramebuffer_8953b325144192fe: function(arg0, arg1) {
            arg0.deleteFramebuffer(arg1);
        },
        __wbg_deleteProgram_0135c6926e75af75: function(arg0, arg1) {
            arg0.deleteProgram(arg1);
        },
        __wbg_deleteProgram_eff668280dcb01ca: function(arg0, arg1) {
            arg0.deleteProgram(arg1);
        },
        __wbg_deleteRenderbuffer_ada86fd85d32984f: function(arg0, arg1) {
            arg0.deleteRenderbuffer(arg1);
        },
        __wbg_deleteRenderbuffer_c9320d711ddf649b: function(arg0, arg1) {
            arg0.deleteRenderbuffer(arg1);
        },
        __wbg_deleteShader_3339454254c7147c: function(arg0, arg1) {
            arg0.deleteShader(arg1);
        },
        __wbg_deleteShader_79dbaaed69b7ca3b: function(arg0, arg1) {
            arg0.deleteShader(arg1);
        },
        __wbg_deleteTexture_3acb672a45f9998a: function(arg0, arg1) {
            arg0.deleteTexture(arg1);
        },
        __wbg_deleteTexture_c1c58550dc55af5c: function(arg0, arg1) {
            arg0.deleteTexture(arg1);
        },
        __wbg_deleteVertexArrayOES_287cf2a2e8a27b13: function(arg0, arg1) {
            arg0.deleteVertexArrayOES(arg1);
        },
        __wbg_deleteVertexArray_8ee078fdb1fb1ffe: function(arg0, arg1) {
            arg0.deleteVertexArray(arg1);
        },
        __wbg_deltaMode_af2c1b6d0e654eb8: function(arg0) {
            const ret = arg0.deltaMode;
            return ret;
        },
        __wbg_deltaX_002e415d6311b335: function(arg0) {
            const ret = arg0.deltaX;
            return ret;
        },
        __wbg_deltaY_5c6a1e0334a84e24: function(arg0) {
            const ret = arg0.deltaY;
            return ret;
        },
        __wbg_detachShader_44838140f431e8d9: function(arg0, arg1, arg2) {
            arg0.detachShader(arg1, arg2);
        },
        __wbg_detachShader_f41985272f788304: function(arg0, arg1, arg2) {
            arg0.detachShader(arg1, arg2);
        },
        __wbg_devicePixelContentBoxSize_442c861e416326ba: function(arg0) {
            const ret = arg0.devicePixelContentBoxSize;
            return ret;
        },
        __wbg_devicePixelRatio_8e5ca44720abafec: function(arg0) {
            const ret = arg0.devicePixelRatio;
            return ret;
        },
        __wbg_disableVertexAttribArray_25f8b2d699a4387a: function(arg0, arg1) {
            arg0.disableVertexAttribArray(arg1 >>> 0);
        },
        __wbg_disableVertexAttribArray_b395358ec5084c39: function(arg0, arg1) {
            arg0.disableVertexAttribArray(arg1 >>> 0);
        },
        __wbg_disable_4dca6ee0ccc91e4a: function(arg0, arg1) {
            arg0.disable(arg1 >>> 0);
        },
        __wbg_disable_cb1b3e6c1cee5202: function(arg0, arg1) {
            arg0.disable(arg1 >>> 0);
        },
        __wbg_disconnect_970650440e4877a1: function(arg0) {
            arg0.disconnect();
        },
        __wbg_disconnect_fff596d884a74ee7: function(arg0) {
            arg0.disconnect();
        },
        __wbg_document_2634180a4c694068: function(arg0) {
            const ret = arg0.document;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_drawArrays_10e1254aa4524ae9: function(arg0, arg1, arg2, arg3) {
            arg0.drawArrays(arg1 >>> 0, arg2, arg3);
        },
        __wbg_drawArrays_42dbb4b0349c8f34: function(arg0, arg1, arg2, arg3) {
            arg0.drawArrays(arg1 >>> 0, arg2, arg3);
        },
        __wbg_enableVertexAttribArray_4f0f3da1ae1fd116: function(arg0, arg1) {
            arg0.enableVertexAttribArray(arg1 >>> 0);
        },
        __wbg_enableVertexAttribArray_7fc50a6fdbc03eb3: function(arg0, arg1) {
            arg0.enableVertexAttribArray(arg1 >>> 0);
        },
        __wbg_enable_c6e523307311617a: function(arg0, arg1) {
            arg0.enable(arg1 >>> 0);
        },
        __wbg_enable_d1f42f78be33a553: function(arg0, arg1) {
            arg0.enable(arg1 >>> 0);
        },
        __wbg_error_6fe2f1675730f2bd: function(arg0, arg1) {
            console.error(arg0, arg1);
        },
        __wbg_exitFullscreen_5fbe5f08298dfd87: function(arg0) {
            arg0.exitFullscreen();
        },
        __wbg_fillText_cdea0ac33ff3d2d1: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.fillText(getStringFromWasm0(arg1, arg2), arg3, arg4);
        }, arguments); },
        __wbg_focus_c80921c19b28520b: function() { return handleError(function (arg0) {
            arg0.focus();
        }, arguments); },
        __wbg_framebufferRenderbuffer_52ae9fcc29125a07: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.framebufferRenderbuffer(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4);
        },
        __wbg_framebufferRenderbuffer_f9d75924fbe9024a: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.framebufferRenderbuffer(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4);
        },
        __wbg_framebufferTexture2D_367ab597a005e8d9: function(arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.framebufferTexture2D(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4, arg5);
        },
        __wbg_framebufferTexture2D_3a558e14f56720d2: function(arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.framebufferTexture2D(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4, arg5);
        },
        __wbg_frontFace_9bdcf2a758e989e5: function(arg0, arg1) {
            arg0.frontFace(arg1 >>> 0);
        },
        __wbg_frontFace_c9bb1fa659ffd276: function(arg0, arg1) {
            arg0.frontFace(arg1 >>> 0);
        },
        __wbg_fullscreenElement_0961e3f245820d9a: function(arg0) {
            const ret = arg0.fullscreenElement;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_generateMipmap_65dcfb0e457bffa9: function(arg0, arg1) {
            arg0.generateMipmap(arg1 >>> 0);
        },
        __wbg_generateMipmap_a461004b95308943: function(arg0, arg1) {
            arg0.generateMipmap(arg1 >>> 0);
        },
        __wbg_getBoundingClientRect_bf4a017da5494fc9: function(arg0) {
            const ret = arg0.getBoundingClientRect();
            return ret;
        },
        __wbg_getCoalescedEvents_3e003f63d9ebbc05: function(arg0) {
            const ret = arg0.getCoalescedEvents;
            return ret;
        },
        __wbg_getCoalescedEvents_b5b03d5636ebc2f4: function(arg0) {
            const ret = arg0.getCoalescedEvents();
            return ret;
        },
        __wbg_getComputedStyle_3fed4438a3d089a6: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.getComputedStyle(arg1);
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_getContext_486aab500e1c34c9: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.getContext(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_getContext_70c2d1bed75d4122: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.getContext(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_getContext_9fd4db9b1cf155db: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = arg0.getContext(getStringFromWasm0(arg1, arg2), arg3);
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_getData_4c376cb0e06929a8: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = arg1.getData(getStringFromWasm0(arg2, arg3));
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_getElementById_c7aba6b93b34bf01: function(arg0, arg1, arg2) {
            const ret = arg0.getElementById(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_getError_978a3c2d9cc5cb5c: function(arg0) {
            const ret = arg0.getError();
            return ret;
        },
        __wbg_getError_c4b431e91b89583e: function(arg0) {
            const ret = arg0.getError();
            return ret;
        },
        __wbg_getExtension_11824edd67a143d8: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.getExtension(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_getModifierState_dae4d71262ea4ecb: function(arg0, arg1, arg2) {
            const ret = arg0.getModifierState(getStringFromWasm0(arg1, arg2));
            return ret;
        },
        __wbg_getOwnPropertyDescriptor_7f06ccc7c66b4ef1: function(arg0, arg1) {
            const ret = Object.getOwnPropertyDescriptor(arg0, arg1);
            return ret;
        },
        __wbg_getParameter_7f7f23cae98f2c81: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.getParameter(arg1 >>> 0);
            return ret;
        }, arguments); },
        __wbg_getProgramInfoLog_35410850de9ccefe: function(arg0, arg1, arg2) {
            const ret = arg1.getProgramInfoLog(arg2);
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_getProgramInfoLog_cd84be80942f345b: function(arg0, arg1, arg2) {
            const ret = arg1.getProgramInfoLog(arg2);
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_getProgramParameter_039391d5ba319f50: function(arg0, arg1, arg2) {
            const ret = arg0.getProgramParameter(arg1, arg2 >>> 0);
            return ret;
        },
        __wbg_getProgramParameter_bbc667347ac2e882: function(arg0, arg1, arg2) {
            const ret = arg0.getProgramParameter(arg1, arg2 >>> 0);
            return ret;
        },
        __wbg_getPropertyValue_25192bdc8db9053c: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = arg1.getPropertyValue(getStringFromWasm0(arg2, arg3));
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_getShaderInfoLog_495bddda98172699: function(arg0, arg1, arg2) {
            const ret = arg1.getShaderInfoLog(arg2);
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_getShaderInfoLog_f423ce6d280ccca0: function(arg0, arg1, arg2) {
            const ret = arg1.getShaderInfoLog(arg2);
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_getShaderParameter_4eb65cfb174ceb22: function(arg0, arg1, arg2) {
            const ret = arg0.getShaderParameter(arg1, arg2 >>> 0);
            return ret;
        },
        __wbg_getShaderParameter_93cc1f20f1dd0b1e: function(arg0, arg1, arg2) {
            const ret = arg0.getShaderParameter(arg1, arg2 >>> 0);
            return ret;
        },
        __wbg_getSupportedExtensions_fbc6e8f81b1f5dbd: function(arg0) {
            const ret = arg0.getSupportedExtensions();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_getUniformLocation_340155dc706d3fea: function(arg0, arg1, arg2, arg3) {
            const ret = arg0.getUniformLocation(arg1, getStringFromWasm0(arg2, arg3));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_getUniformLocation_ab63f569a4e41744: function(arg0, arg1, arg2, arg3) {
            const ret = arg0.getUniformLocation(arg1, getStringFromWasm0(arg2, arg3));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_get_197a3fe98f169e38: function(arg0, arg1) {
            const ret = arg0[arg1 >>> 0];
            return ret;
        },
        __wbg_get_bdc9ff59be9545bf: function(arg0, arg1, arg2, arg3) {
            const ret = arg1[getStringFromWasm0(arg2, arg3)];
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_get_unchecked_54a4374c38e08460: function(arg0, arg1) {
            const ret = arg0[arg1 >>> 0];
            return ret;
        },
        __wbg_height_5a65f00c2e236c0e: function(arg0) {
            const ret = arg0.height;
            return ret;
        },
        __wbg_height_e9afb506f31052a9: function(arg0) {
            const ret = arg0.height;
            return ret;
        },
        __wbg_id_b08632fa6ed13f45: function(arg0, arg1) {
            const ret = arg1.id;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_inlineSize_8895590ca1875f8d: function(arg0) {
            const ret = arg0.inlineSize;
            return ret;
        },
        __wbg_inputType_387821966798c86b: function(arg0, arg1) {
            const ret = arg1.inputType;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_instanceof_CanvasRenderingContext2d_d0cab9e931424c52: function(arg0) {
            let result;
            try {
                result = arg0 instanceof CanvasRenderingContext2D;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_HtmlCanvasElement_8ce29a370a2b10a4: function(arg0) {
            let result;
            try {
                result = arg0 instanceof HTMLCanvasElement;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_HtmlInputElement_5a4ec7d390cf0cfc: function(arg0) {
            let result;
            try {
                result = arg0 instanceof HTMLInputElement;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_OffscreenCanvasRenderingContext2d_9c9a48d2ce5a9707: function(arg0) {
            let result;
            try {
                result = arg0 instanceof OffscreenCanvasRenderingContext2D;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_WebGl2RenderingContext_b30fc72a0130431a: function(arg0) {
            let result;
            try {
                result = arg0 instanceof WebGL2RenderingContext;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Window_0d356b88a2f77c42: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Window;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_isComposing_521882595e2b30a4: function(arg0) {
            const ret = arg0.isComposing;
            return ret;
        },
        __wbg_isComposing_e3709163a95a2477: function(arg0) {
            const ret = arg0.isComposing;
            return ret;
        },
        __wbg_isIntersecting_e02cd273824aee08: function(arg0) {
            const ret = arg0.isIntersecting;
            return ret;
        },
        __wbg_is_de5b366c746e004c: function(arg0, arg1) {
            const ret = Object.is(arg0, arg1);
            return ret;
        },
        __wbg_key_d6b3d2cce3d41872: function(arg0, arg1) {
            const ret = arg1.key;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_length_c6054974c0a6cdb9: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_linkProgram_6a2eee02a03b9b00: function(arg0, arg1) {
            arg0.linkProgram(arg1);
        },
        __wbg_linkProgram_e23a348b0f6e0c4f: function(arg0, arg1) {
            arg0.linkProgram(arg1);
        },
        __wbg_location_8fedbe6d61285cd1: function(arg0) {
            const ret = arg0.location;
            return ret;
        },
        __wbg_log_0399ee00d62a50e0: function(arg0, arg1) {
            console.log(getStringFromWasm0(arg0, arg1));
        },
        __wbg_matchMedia_049ef5c8f8f904f2: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.matchMedia(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_matches_2bd4c7873cbdbc9d: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.matches(getStringFromWasm0(arg1, arg2));
            return ret;
        }, arguments); },
        __wbg_matches_a4c6202857b1dac9: function(arg0) {
            const ret = arg0.matches;
            return ret;
        },
        __wbg_media_405c765b5e24963e: function(arg0, arg1) {
            const ret = arg1.media;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_metaKey_1c2847b62ad062c1: function(arg0) {
            const ret = arg0.metaKey;
            return ret;
        },
        __wbg_metaKey_e661374fe349fa2f: function(arg0) {
            const ret = arg0.metaKey;
            return ret;
        },
        __wbg_movementX_128a28f825e5e554: function(arg0) {
            const ret = arg0.movementX;
            return ret;
        },
        __wbg_movementY_10cde9bca43c7656: function(arg0) {
            const ret = arg0.movementY;
            return ret;
        },
        __wbg_naturalHeight_7cbdc2f637f6914f: function(arg0) {
            const ret = arg0.naturalHeight;
            return ret;
        },
        __wbg_naturalWidth_5c95710d6c0ff97a: function(arg0) {
            const ret = arg0.naturalWidth;
            return ret;
        },
        __wbg_navigator_935098efd1dc7fe5: function(arg0) {
            const ret = arg0.navigator;
            return ret;
        },
        __wbg_new_1e52e3c919312525: function() { return handleError(function (arg0) {
            const ret = new ResizeObserver(arg0);
            return ret;
        }, arguments); },
        __wbg_new_2e117a478906f062: function() {
            const ret = new Object();
            return ret;
        },
        __wbg_new_51233fa2a760b272: function() { return handleError(function () {
            const ret = new AbortController();
            return ret;
        }, arguments); },
        __wbg_new_98e81f23cc202cc4: function() { return handleError(function () {
            const ret = new MessageChannel();
            return ret;
        }, arguments); },
        __wbg_new_cbb1396a0ca9d6f4: function() { return handleError(function (arg0, arg1) {
            const ret = new Worker(getStringFromWasm0(arg0, arg1));
            return ret;
        }, arguments); },
        __wbg_new_e469d9dc75b3bc01: function() { return handleError(function (arg0) {
            const ret = new IntersectionObserver(arg0);
            return ret;
        }, arguments); },
        __wbg_new_with_str_sequence_and_options_b67a6653749e1791: function() { return handleError(function (arg0, arg1) {
            const ret = new Blob(arg0, arg1);
            return ret;
        }, arguments); },
        __wbg_new_with_u8_clamped_array_483dbce5ac9306c3: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = new ImageData(getClampedArrayU8FromWasm0(arg0, arg1), arg2 >>> 0);
            return ret;
        }, arguments); },
        __wbg_now_e7c6795a7f81e10f: function(arg0) {
            const ret = arg0.now();
            return ret;
        },
        __wbg_observe_592b94857eed8e27: function(arg0, arg1) {
            arg0.observe(arg1);
        },
        __wbg_observe_91d5c6a617c3d390: function(arg0, arg1, arg2) {
            arg0.observe(arg1, arg2);
        },
        __wbg_observe_a987521b8fae2aaf: function(arg0, arg1) {
            arg0.observe(arg1);
        },
        __wbg_of_3ed679d45555e384: function(arg0, arg1) {
            const ret = Array.of(arg0, arg1);
            return ret;
        },
        __wbg_of_62183ea089c00bfa: function(arg0) {
            const ret = Array.of(arg0);
            return ret;
        },
        __wbg_offsetHeight_112efe2ab532d954: function(arg0) {
            const ret = arg0.offsetHeight;
            return ret;
        },
        __wbg_offsetLeft_1c4061160a1144b1: function(arg0) {
            const ret = arg0.offsetLeft;
            return ret;
        },
        __wbg_offsetTop_ee0ed0f4479c298d: function(arg0) {
            const ret = arg0.offsetTop;
            return ret;
        },
        __wbg_offsetWidth_96ca6cd7e7655feb: function(arg0) {
            const ret = arg0.offsetWidth;
            return ret;
        },
        __wbg_offsetX_a9bf2ea7f0575ac9: function(arg0) {
            const ret = arg0.offsetX;
            return ret;
        },
        __wbg_offsetY_10e5433a1bbd4c01: function(arg0) {
            const ret = arg0.offsetY;
            return ret;
        },
        __wbg_open_2d08b9c2615058f9: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            const ret = arg0.open(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_performance_3fcf6e32a7e1ed0a: function(arg0) {
            const ret = arg0.performance;
            return ret;
        },
        __wbg_persisted_cce9b6da86c07260: function(arg0) {
            const ret = arg0.persisted;
            return ret;
        },
        __wbg_pixelStorei_55ad4c67b699537c: function(arg0, arg1, arg2) {
            arg0.pixelStorei(arg1 >>> 0, arg2);
        },
        __wbg_pixelStorei_a78a504be58d1d0a: function(arg0, arg1, arg2) {
            arg0.pixelStorei(arg1 >>> 0, arg2);
        },
        __wbg_platform_18b294e4b465da87: function() { return handleError(function (arg0, arg1) {
            const ret = arg1.platform;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_play_3997a1be51d27925: function(arg0) {
            arg0.play();
        },
        __wbg_pointerId_2c4027fd33473f83: function(arg0) {
            const ret = arg0.pointerId;
            return ret;
        },
        __wbg_pointerType_2dfba7dcd3e033b4: function(arg0, arg1) {
            const ret = arg1.pointerType;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_port1_aaca04ed552c16ef: function(arg0) {
            const ret = arg0.port1;
            return ret;
        },
        __wbg_port2_baea902d7925a544: function(arg0) {
            const ret = arg0.port2;
            return ret;
        },
        __wbg_postMessage_5b1dc9f8de88488a: function() { return handleError(function (arg0, arg1) {
            arg0.postMessage(arg1);
        }, arguments); },
        __wbg_postMessage_d05b4de2ebb80b85: function() { return handleError(function (arg0, arg1, arg2) {
            arg0.postMessage(arg1, arg2);
        }, arguments); },
        __wbg_postTask_e2439afddcdfbb55: function(arg0, arg1, arg2) {
            const ret = arg0.postTask(arg1, arg2);
            return ret;
        },
        __wbg_pressure_727ca025d24d77ec: function(arg0) {
            const ret = arg0.pressure;
            return ret;
        },
        __wbg_preventDefault_c047d3e292b08cc4: function(arg0) {
            arg0.preventDefault();
        },
        __wbg_prototype_0d5bb2023db3bcfc: function() {
            const ret = ResizeObserverEntry.prototype;
            return ret;
        },
        __wbg_putImageData_253970d244a23731: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
            arg0.putImageData(arg1, arg2, arg3, arg4, arg5, arg6, arg7);
        }, arguments); },
        __wbg_putImageData_8205094a7b8e8699: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
            arg0.putImageData(arg1, arg2, arg3, arg4, arg5, arg6, arg7);
        }, arguments); },
        __wbg_querySelector_1f3658f4b48e268b: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.querySelector(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_queueMicrotask_1c9b3800e321a967: function(arg0) {
            const ret = arg0.queueMicrotask;
            return ret;
        },
        __wbg_queueMicrotask_311744e534a929a3: function(arg0) {
            queueMicrotask(arg0);
        },
        __wbg_queueMicrotask_3d05fddf59c892b7: function(arg0, arg1) {
            arg0.queueMicrotask(arg1);
        },
        __wbg_readPixels_05377f8b6fa1d8eb: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
            arg0.readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, arg7);
        }, arguments); },
        __wbg_readPixels_5840000f3e22f3ce: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
            arg0.readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, arg7);
        }, arguments); },
        __wbg_readPixels_5bf204799ed2272f: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
            arg0.readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, arg7);
        }, arguments); },
        __wbg_removeEventListener_c6782a9c30557d31: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            arg0.removeEventListener(getStringFromWasm0(arg1, arg2), arg3);
        }, arguments); },
        __wbg_removeListener_9b7f8155dd998421: function() { return handleError(function (arg0, arg1) {
            arg0.removeListener(arg1);
        }, arguments); },
        __wbg_removeProperty_2015da6fd4077af0: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = arg1.removeProperty(getStringFromWasm0(arg2, arg3));
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_renderbufferStorage_2918fb696fd45663: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.renderbufferStorage(arg1 >>> 0, arg2 >>> 0, arg3, arg4);
        },
        __wbg_renderbufferStorage_3049e13db5c4e60e: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.renderbufferStorage(arg1 >>> 0, arg2 >>> 0, arg3, arg4);
        },
        __wbg_repeat_46a5c90df9f6ef0b: function(arg0) {
            const ret = arg0.repeat;
            return ret;
        },
        __wbg_requestAnimationFrame_b92ccfbc8ca777a8: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.requestAnimationFrame(arg1);
            return ret;
        }, arguments); },
        __wbg_requestFullscreen_3f16e43f398ce624: function(arg0) {
            const ret = arg0.requestFullscreen();
            return ret;
        },
        __wbg_requestFullscreen_b977a3a0697e883c: function(arg0) {
            const ret = arg0.requestFullscreen;
            return ret;
        },
        __wbg_requestIdleCallback_25d3b54bee33cdc0: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.requestIdleCallback(arg1);
            return ret;
        }, arguments); },
        __wbg_requestIdleCallback_3689e3e38f6cfc02: function(arg0) {
            const ret = arg0.requestIdleCallback;
            return ret;
        },
        __wbg_resolve_d82363d90af6928a: function(arg0) {
            const ret = Promise.resolve(arg0);
            return ret;
        },
        __wbg_revokeObjectURL_f8e75e321c6e13b8: function() { return handleError(function (arg0, arg1) {
            URL.revokeObjectURL(getStringFromWasm0(arg0, arg1));
        }, arguments); },
        __wbg_scheduler_a17d41c9c822fc26: function(arg0) {
            const ret = arg0.scheduler;
            return ret;
        },
        __wbg_scheduler_b35fe73ba70e89cc: function(arg0) {
            const ret = arg0.scheduler;
            return ret;
        },
        __wbg_scissor_6c024669fbf4fe72: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.scissor(arg1, arg2, arg3, arg4);
        },
        __wbg_scissor_f9696c630e464977: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.scissor(arg1, arg2, arg3, arg4);
        },
        __wbg_setAttribute_8bccfbabf2a83682: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_setData_5f195674cd89c653: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.setData(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_setPointerCapture_87f6b55ceca474a9: function() { return handleError(function (arg0, arg1) {
            arg0.setPointerCapture(arg1);
        }, arguments); },
        __wbg_setProperty_da5e4438a912e787: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.setProperty(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_setTimeout_6e540f43d21684d9: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.setTimeout(arg1);
            return ret;
        }, arguments); },
        __wbg_setTimeout_8afa0b5ed243c77d: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.setTimeout(arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_set_4564f7dc44fcb0c9: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = Reflect.set(arg0, arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_set_antialias_c480de96cb4950f7: function(arg0, arg1) {
            arg0.antialias = arg1 !== 0;
        },
        __wbg_set_box_3fa4e9e6b8b96df4: function(arg0, arg1) {
            arg0.box = __wbindgen_enum_ResizeObserverBoxOptions[arg1];
        },
        __wbg_set_fillStyle_35471aa9a10a6686: function(arg0, arg1, arg2) {
            arg0.fillStyle = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_font_e2bce6175ef42bc3: function(arg0, arg1, arg2) {
            arg0.font = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_height_1a366823112675ba: function(arg0, arg1) {
            arg0.height = arg1 >>> 0;
        },
        __wbg_set_height_ad5056ea051acd78: function(arg0, arg1) {
            arg0.height = arg1 >>> 0;
        },
        __wbg_set_height_ef298446b359b0c5: function(arg0, arg1) {
            arg0.height = arg1 >>> 0;
        },
        __wbg_set_onmessage_8700520361fa9f48: function(arg0, arg1) {
            arg0.onmessage = arg1;
        },
        __wbg_set_stencil_e720fa55b022ebbd: function(arg0, arg1) {
            arg0.stencil = arg1 !== 0;
        },
        __wbg_set_type_3194793b7f2a05be: function(arg0, arg1, arg2) {
            arg0.type = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_value_3cd64c88136b460c: function(arg0, arg1, arg2) {
            arg0.value = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_width_031bdecd763c5855: function(arg0, arg1) {
            arg0.width = arg1 >>> 0;
        },
        __wbg_set_width_f9aedd10e078d976: function(arg0, arg1) {
            arg0.width = arg1 >>> 0;
        },
        __wbg_set_width_f9e631f4ee129e5c: function(arg0, arg1) {
            arg0.width = arg1 >>> 0;
        },
        __wbg_shaderSource_628c37a476ae65f9: function(arg0, arg1, arg2, arg3) {
            arg0.shaderSource(arg1, getStringFromWasm0(arg2, arg3));
        },
        __wbg_shaderSource_66dce75b25a1a407: function(arg0, arg1, arg2, arg3) {
            arg0.shaderSource(arg1, getStringFromWasm0(arg2, arg3));
        },
        __wbg_shiftKey_273ee8c901267b55: function(arg0) {
            const ret = arg0.shiftKey;
            return ret;
        },
        __wbg_shiftKey_e57eae650446e681: function(arg0) {
            const ret = arg0.shiftKey;
            return ret;
        },
        __wbg_signal_4d9d567be73ea52c: function(arg0) {
            const ret = arg0.signal;
            return ret;
        },
        __wbg_src_34a8fcc4349d8419: function(arg0, arg1) {
            const ret = arg1.src;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_start_8ca2b69cfb7618b6: function(arg0) {
            arg0.start();
        },
        __wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: function() {
            const ret = typeof globalThis === 'undefined' ? null : globalThis;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_GLOBAL_ce44e66a4935da8c: function() {
            const ret = typeof global === 'undefined' ? null : global;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_SELF_44f6e0cb5e67cdad: function() {
            const ret = typeof self === 'undefined' ? null : self;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_WINDOW_168f178805d978fe: function() {
            const ret = typeof window === 'undefined' ? null : window;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_stencilFunc_41e71f9ff846cd50: function(arg0, arg1, arg2, arg3) {
            arg0.stencilFunc(arg1 >>> 0, arg2, arg3 >>> 0);
        },
        __wbg_stencilFunc_b28175f70b474a70: function(arg0, arg1, arg2, arg3) {
            arg0.stencilFunc(arg1 >>> 0, arg2, arg3 >>> 0);
        },
        __wbg_stencilMask_485dcb5965c79a71: function(arg0, arg1) {
            arg0.stencilMask(arg1 >>> 0);
        },
        __wbg_stencilMask_f9fe198f7fd6fc9c: function(arg0, arg1) {
            arg0.stencilMask(arg1 >>> 0);
        },
        __wbg_stencilOpSeparate_5c4dbe1cf597c5ed: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.stencilOpSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
        },
        __wbg_stencilOpSeparate_6cf50803475d2640: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.stencilOpSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
        },
        __wbg_stencilOp_c95fda14a80e969a: function(arg0, arg1, arg2, arg3) {
            arg0.stencilOp(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0);
        },
        __wbg_stencilOp_dd57b3323344c8de: function(arg0, arg1, arg2, arg3) {
            arg0.stencilOp(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0);
        },
        __wbg_style_f00fbf31e0a68f0e: function(arg0) {
            const ret = arg0.style;
            return ret;
        },
        __wbg_texImage2D_0e0f37b9fb297d01: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments); },
        __wbg_texImage2D_0e537dc331652de3: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments); },
        __wbg_texImage2D_7bc3001cb8602ed2: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments); },
        __wbg_texParameteri_c6efffcecb474d2f: function(arg0, arg1, arg2, arg3) {
            arg0.texParameteri(arg1 >>> 0, arg2 >>> 0, arg3);
        },
        __wbg_texParameteri_fe6210a493d48a16: function(arg0, arg1, arg2, arg3) {
            arg0.texParameteri(arg1 >>> 0, arg2 >>> 0, arg3);
        },
        __wbg_texSubImage2D_1b2ff28f994c325e: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments); },
        __wbg_texSubImage2D_61d2662079db47b8: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
            arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, arg7);
        }, arguments); },
        __wbg_texSubImage2D_88e1d7e75868a8bb: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
            arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, arg7);
        }, arguments); },
        __wbg_texSubImage2D_d14d9c0a1f627c31: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments); },
        __wbg_texSubImage2D_f03448e182b0820d: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments); },
        __wbg_then_591b6b3a75ee817a: function(arg0, arg1) {
            const ret = arg0.then(arg1);
            return ret;
        },
        __wbg_uniform1i_cd9a7f990128ea48: function(arg0, arg1, arg2) {
            arg0.uniform1i(arg1, arg2);
        },
        __wbg_uniform1i_e4f13604354c28ae: function(arg0, arg1, arg2) {
            arg0.uniform1i(arg1, arg2);
        },
        __wbg_uniform2fv_17592f4dad9798fb: function(arg0, arg1, arg2, arg3) {
            arg0.uniform2fv(arg1, getArrayF32FromWasm0(arg2, arg3));
        },
        __wbg_uniform2fv_39277cf2d3cb83c7: function(arg0, arg1, arg2, arg3) {
            arg0.uniform2fv(arg1, getArrayF32FromWasm0(arg2, arg3));
        },
        __wbg_uniform4fv_85ad5d23234895d2: function(arg0, arg1, arg2, arg3) {
            arg0.uniform4fv(arg1, getArrayF32FromWasm0(arg2, arg3));
        },
        __wbg_uniform4fv_9e670a001c77dca0: function(arg0, arg1, arg2, arg3) {
            arg0.uniform4fv(arg1, getArrayF32FromWasm0(arg2, arg3));
        },
        __wbg_unobserve_e9b5d98f37ccf1ff: function(arg0, arg1) {
            arg0.unobserve(arg1);
        },
        __wbg_useProgram_0e1cd86765304939: function(arg0, arg1) {
            arg0.useProgram(arg1);
        },
        __wbg_useProgram_ab2ee2a13a1fd909: function(arg0, arg1) {
            arg0.useProgram(arg1);
        },
        __wbg_userAgentData_31b8f893e8977e94: function(arg0) {
            const ret = arg0.userAgentData;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_userAgent_3ac81db86b32899a: function() { return handleError(function (arg0, arg1) {
            const ret = arg1.userAgent;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_vertexAttribPointer_36c76a0c7e4f0239: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            arg0.vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
        },
        __wbg_vertexAttribPointer_4e5d289c5d224210: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            arg0.vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
        },
        __wbg_viewport_a0ca330f9b85397e: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.viewport(arg1, arg2, arg3, arg4);
        },
        __wbg_viewport_b5bd46a0d111c83c: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.viewport(arg1, arg2, arg3, arg4);
        },
        __wbg_visibilityState_39ac2e458f892eec: function(arg0) {
            const ret = arg0.visibilityState;
            return (__wbindgen_enum_VisibilityState.indexOf(ret) + 1 || 3) - 1;
        },
        __wbg_webkitExitFullscreen_f487871f11a8185e: function(arg0) {
            arg0.webkitExitFullscreen();
        },
        __wbg_webkitFullscreenElement_4055d847f8ff064e: function(arg0) {
            const ret = arg0.webkitFullscreenElement;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_webkitRequestFullscreen_c4ec4df7be373ffd: function(arg0) {
            arg0.webkitRequestFullscreen();
        },
        __wbg_width_08e66520b99071f4: function(arg0) {
            const ret = arg0.width;
            return ret;
        },
        __wbg_width_ca7775f863f3ddbb: function(arg0) {
            const ret = arg0.width;
            return ret;
        },
        __wbg_x_aff60dcb3e218497: function(arg0) {
            const ret = arg0.x;
            return ret;
        },
        __wbg_y_fe6dd6897e29b956: function(arg0) {
            const ret = arg0.y;
            return ret;
        },
        __wbindgen_cast_0000000000000001: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 30233, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__h3a7c56fe0179d3a1);
            return ret;
        },
        __wbindgen_cast_0000000000000002: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 31615, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__ha8f6a9db4b7351e3);
            return ret;
        },
        __wbindgen_cast_0000000000000003: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("Array<any>"), NamedExternref("ResizeObserver")], shim_idx: 30240, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__h8f0020328fd29aff);
            return ret;
        },
        __wbindgen_cast_0000000000000004: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("Array<any>")], shim_idx: 30233, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__h3a7c56fe0179d3a1_3);
            return ret;
        },
        __wbindgen_cast_0000000000000005: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("ClipboardEvent")], shim_idx: 29741, ret: Unit, inner_ret: Some(Unit) }, mutable: false }) -> Externref`.
            const ret = makeClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__h0a91813dbbbdf8dc);
            return ret;
        },
        __wbindgen_cast_0000000000000006: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("CompositionEvent")], shim_idx: 29741, ret: Unit, inner_ret: Some(Unit) }, mutable: false }) -> Externref`.
            const ret = makeClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__h0a91813dbbbdf8dc_5);
            return ret;
        },
        __wbindgen_cast_0000000000000007: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("Event")], shim_idx: 29741, ret: Unit, inner_ret: Some(Unit) }, mutable: false }) -> Externref`.
            const ret = makeClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__h0a91813dbbbdf8dc_6);
            return ret;
        },
        __wbindgen_cast_0000000000000008: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("Event")], shim_idx: 30233, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__h3a7c56fe0179d3a1_7);
            return ret;
        },
        __wbindgen_cast_0000000000000009: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("FocusEvent")], shim_idx: 30233, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__h3a7c56fe0179d3a1_8);
            return ret;
        },
        __wbindgen_cast_000000000000000a: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("InputEvent")], shim_idx: 29741, ret: Unit, inner_ret: Some(Unit) }, mutable: false }) -> Externref`.
            const ret = makeClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__h0a91813dbbbdf8dc_9);
            return ret;
        },
        __wbindgen_cast_000000000000000b: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("KeyboardEvent")], shim_idx: 29741, ret: Unit, inner_ret: Some(Unit) }, mutable: false }) -> Externref`.
            const ret = makeClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__h0a91813dbbbdf8dc_10);
            return ret;
        },
        __wbindgen_cast_000000000000000c: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("KeyboardEvent")], shim_idx: 30233, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__h3a7c56fe0179d3a1_11);
            return ret;
        },
        __wbindgen_cast_000000000000000d: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("PageTransitionEvent")], shim_idx: 30233, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__h3a7c56fe0179d3a1_12);
            return ret;
        },
        __wbindgen_cast_000000000000000e: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("PointerEvent")], shim_idx: 30233, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__h3a7c56fe0179d3a1_13);
            return ret;
        },
        __wbindgen_cast_000000000000000f: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("WebGLContextEvent")], shim_idx: 29741, ret: Unit, inner_ret: Some(Unit) }, mutable: false }) -> Externref`.
            const ret = makeClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__h0a91813dbbbdf8dc_14);
            return ret;
        },
        __wbindgen_cast_0000000000000010: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("WheelEvent")], shim_idx: 30233, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__h3a7c56fe0179d3a1_15);
            return ret;
        },
        __wbindgen_cast_0000000000000011: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [], shim_idx: 30235, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__hcec79d78eb7c6bcb);
            return ret;
        },
        __wbindgen_cast_0000000000000012: function(arg0) {
            // Cast intrinsic for `F64 -> Externref`.
            const ret = arg0;
            return ret;
        },
        __wbindgen_cast_0000000000000013: function(arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(F32)) -> NamedExternref("Float32Array")`.
            const ret = getArrayF32FromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_cast_0000000000000014: function(arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(I16)) -> NamedExternref("Int16Array")`.
            const ret = getArrayI16FromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_cast_0000000000000015: function(arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(I32)) -> NamedExternref("Int32Array")`.
            const ret = getArrayI32FromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_cast_0000000000000016: function(arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(I8)) -> NamedExternref("Int8Array")`.
            const ret = getArrayI8FromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_cast_0000000000000017: function(arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(U16)) -> NamedExternref("Uint16Array")`.
            const ret = getArrayU16FromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_cast_0000000000000018: function(arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(U32)) -> NamedExternref("Uint32Array")`.
            const ret = getArrayU32FromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_cast_0000000000000019: function(arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(U8)) -> NamedExternref("Uint8Array")`.
            const ret = getArrayU8FromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_cast_000000000000001a: function(arg0, arg1) {
            // Cast intrinsic for `Ref(String) -> Externref`.
            const ret = getStringFromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            const offset = table.grow(4);
            table.set(0, undefined);
            table.set(offset + 0, undefined);
            table.set(offset + 1, null);
            table.set(offset + 2, true);
            table.set(offset + 3, false);
        },
    };
    return {
        __proto__: null,
        "./sleek_ui_lib_bg.js": import0,
    };
}

function wasm_bindgen__convert__closures_____invoke__hcec79d78eb7c6bcb(arg0, arg1) {
    wasm.wasm_bindgen__convert__closures_____invoke__hcec79d78eb7c6bcb(arg0, arg1);
}

function wasm_bindgen__convert__closures_____invoke__h3a7c56fe0179d3a1(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h3a7c56fe0179d3a1(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h3a7c56fe0179d3a1_3(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h3a7c56fe0179d3a1_3(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h0a91813dbbbdf8dc(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h0a91813dbbbdf8dc(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h0a91813dbbbdf8dc_5(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h0a91813dbbbdf8dc_5(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h0a91813dbbbdf8dc_6(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h0a91813dbbbdf8dc_6(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h3a7c56fe0179d3a1_7(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h3a7c56fe0179d3a1_7(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h3a7c56fe0179d3a1_8(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h3a7c56fe0179d3a1_8(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h0a91813dbbbdf8dc_9(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h0a91813dbbbdf8dc_9(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h0a91813dbbbdf8dc_10(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h0a91813dbbbdf8dc_10(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h3a7c56fe0179d3a1_11(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h3a7c56fe0179d3a1_11(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h3a7c56fe0179d3a1_12(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h3a7c56fe0179d3a1_12(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h3a7c56fe0179d3a1_13(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h3a7c56fe0179d3a1_13(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h0a91813dbbbdf8dc_14(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h0a91813dbbbdf8dc_14(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h3a7c56fe0179d3a1_15(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h3a7c56fe0179d3a1_15(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__ha8f6a9db4b7351e3(arg0, arg1, arg2) {
    const ret = wasm.wasm_bindgen__convert__closures_____invoke__ha8f6a9db4b7351e3(arg0, arg1, arg2);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}

function wasm_bindgen__convert__closures_____invoke__h8f0020328fd29aff(arg0, arg1, arg2, arg3) {
    wasm.wasm_bindgen__convert__closures_____invoke__h8f0020328fd29aff(arg0, arg1, arg2, arg3);
}


const __wbindgen_enum_ResizeObserverBoxOptions = ["border-box", "content-box", "device-pixel-content-box"];


const __wbindgen_enum_VisibilityState = ["hidden", "visible"];

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => wasm.__wbindgen_destroy_closure(state.a, state.b));

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function getArrayF32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getFloat32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayI16FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getInt16ArrayMemory0().subarray(ptr / 2, ptr / 2 + len);
}

function getArrayI32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getInt32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayI8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getInt8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

function getArrayU16FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint16ArrayMemory0().subarray(ptr / 2, ptr / 2 + len);
}

function getArrayU32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

function getClampedArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ClampedArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

let cachedFloat32ArrayMemory0 = null;
function getFloat32ArrayMemory0() {
    if (cachedFloat32ArrayMemory0 === null || cachedFloat32ArrayMemory0.byteLength === 0) {
        cachedFloat32ArrayMemory0 = new Float32Array(wasm.memory.buffer);
    }
    return cachedFloat32ArrayMemory0;
}

let cachedInt16ArrayMemory0 = null;
function getInt16ArrayMemory0() {
    if (cachedInt16ArrayMemory0 === null || cachedInt16ArrayMemory0.byteLength === 0) {
        cachedInt16ArrayMemory0 = new Int16Array(wasm.memory.buffer);
    }
    return cachedInt16ArrayMemory0;
}

let cachedInt32ArrayMemory0 = null;
function getInt32ArrayMemory0() {
    if (cachedInt32ArrayMemory0 === null || cachedInt32ArrayMemory0.byteLength === 0) {
        cachedInt32ArrayMemory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32ArrayMemory0;
}

let cachedInt8ArrayMemory0 = null;
function getInt8ArrayMemory0() {
    if (cachedInt8ArrayMemory0 === null || cachedInt8ArrayMemory0.byteLength === 0) {
        cachedInt8ArrayMemory0 = new Int8Array(wasm.memory.buffer);
    }
    return cachedInt8ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    return decodeText(ptr >>> 0, len);
}

let cachedUint16ArrayMemory0 = null;
function getUint16ArrayMemory0() {
    if (cachedUint16ArrayMemory0 === null || cachedUint16ArrayMemory0.byteLength === 0) {
        cachedUint16ArrayMemory0 = new Uint16Array(wasm.memory.buffer);
    }
    return cachedUint16ArrayMemory0;
}

let cachedUint32ArrayMemory0 = null;
function getUint32ArrayMemory0() {
    if (cachedUint32ArrayMemory0 === null || cachedUint32ArrayMemory0.byteLength === 0) {
        cachedUint32ArrayMemory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32ArrayMemory0;
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

let cachedUint8ClampedArrayMemory0 = null;
function getUint8ClampedArrayMemory0() {
    if (cachedUint8ClampedArrayMemory0 === null || cachedUint8ClampedArrayMemory0.byteLength === 0) {
        cachedUint8ClampedArrayMemory0 = new Uint8ClampedArray(wasm.memory.buffer);
    }
    return cachedUint8ClampedArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function makeClosure(arg0, arg1, f) {
    const state = { a: arg0, b: arg1, cnt: 1 };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        try {
            return f(state.a, state.b, ...args);
        } finally {
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            wasm.__wbindgen_destroy_closure(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function makeMutClosure(arg0, arg1, f) {
    const state = { a: arg0, b: arg1, cnt: 1 };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            state.a = a;
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            wasm.__wbindgen_destroy_closure(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasmInstance, wasm;
function __wbg_finalize_init(instance, module) {
    wasmInstance = instance;
    wasm = instance.exports;
    wasmModule = module;
    cachedDataViewMemory0 = null;
    cachedFloat32ArrayMemory0 = null;
    cachedInt16ArrayMemory0 = null;
    cachedInt32ArrayMemory0 = null;
    cachedInt8ArrayMemory0 = null;
    cachedUint16ArrayMemory0 = null;
    cachedUint32ArrayMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    cachedUint8ClampedArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = module.ok && expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('sleek_ui_lib_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
