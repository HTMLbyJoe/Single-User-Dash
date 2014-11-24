<?php

class BaseController extends Controller {

    /**
     * Setup the layout used by the controller.
     *
     * @return void
     */
    protected function setupLayout()
    {
        if ( ! is_null($this->layout))
        {
            $this->layout = View::make($this->layout);
            try {
                $this->layout->analytics = View::make('analytics');
            } catch (InvalidArgumentException $e) {
                $this->layout->analytics = '';
            }
        }
    }

}
