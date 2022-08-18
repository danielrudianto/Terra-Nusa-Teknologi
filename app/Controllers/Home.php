<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index()
    {
        $locale = $this->request->getLocale();
        $supportedLocales = $this->request->config->supportedLocales;
        if (!in_array($locale, $supportedLocales)) {
            return redirect()->to('404');
        } else {
            $viewData['locale'] = $locale;
            $viewData['supportedLocales'] = $supportedLocales;

            return view('index', $viewData);
        }
    }

    public function notFound()
    {
    }
}
