import React, {useCallback, useState} from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import { setCookie, getCookie } from '../services/cookie';

export default function CookieAlert() {
    const [isOpen, setOpen] = useState(!getCookie('acceptTechCookie'));
    const handleClose = useCallback(() => {
        setCookie('acceptTechCookie', 'true');
        setOpen(false);
    }, [setOpen]);

    return (
        <Snackbar open={isOpen} onClose={handleClose}>
            <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                Палітыка апрацоўкі файлаў Cookie. Гэты вэб-сайт выкарыстоўвае файлы Cookie для забеспячэння зручнасці карыстальнікаў сайта, яго паляпшэння, а таксама аналітыкі.
            </Alert>
        </Snackbar>
    );
}
