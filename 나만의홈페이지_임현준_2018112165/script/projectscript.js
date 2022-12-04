function projectHighlight(p_id) {
    let p = document.getElementById(p_id);
    let st = p.style;
    st.background='#c8d6e5';
    st.borderRadius='10px 10px 0 0';
    st.border = '3px solid #8395a7';
    st.borderBottom = 'none';
    st.marginTop = '8px';
}
function accordion(l_id, p_id) {
    let l = document.getElementById(l_id);
    let style = l.style;
    if(style.display == "none"){
        style.display = "inline";
        projectHighlight(p_id);
    }
    else{
        style.display="none";
    }
}