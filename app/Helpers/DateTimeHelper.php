<?php

namespace App\Helpers;

use App\Settings\GeneralSettings;
use Carbon\Carbon;

class DateTimeHelper
{
    /**
     * Format date with application timezone
     */
    public static function formatDate($date, ?string $format = null): string
    {
        if (!$date) {
            return '';
        }

        $settings = app(GeneralSettings::class);
        $format = $format ?? $settings->date_format;
        
        return Carbon::parse($date)
            ->timezone($settings->timezone)
            ->format($format);
    }

    /**
     * Format datetime with application timezone
     */
    public static function formatDateTime($date, ?string $format = null): string
    {
        if (!$date) {
            return '';
        }

        $settings = app(GeneralSettings::class);
        $dateFormat = $settings->date_format;
        $format = $format ?? "$dateFormat H:i:s";
        
        return Carbon::parse($date)
            ->timezone($settings->timezone)
            ->format($format);
    }

    /**
     * Format date for humans (e.g., "2 hours ago")
     */
    public static function diffForHumans($date): string
    {
        if (!$date) {
            return '';
        }

        $settings = app(GeneralSettings::class);
        
        return Carbon::parse($date)
            ->timezone($settings->timezone)
            ->diffForHumans();
    }

    /**
     * Get current datetime in application timezone
     */
    public static function now(): Carbon
    {
        $settings = app(GeneralSettings::class);
        return Carbon::now($settings->timezone);
    }

    /**
     * Convert date to application timezone
     */
    public static function toAppTimezone($date): Carbon
    {
        $settings = app(GeneralSettings::class);
        return Carbon::parse($date)->timezone($settings->timezone);
    }

    /**
     * Get application timezone
     */
    public static function getTimezone(): string
    {
        return app(GeneralSettings::class)->timezone;
    }

    /**
     * Get application date format
     */
    public static function getDateFormat(): string
    {
        return app(GeneralSettings::class)->date_format;
    }
}
