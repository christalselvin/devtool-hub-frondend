import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getSettings,
  updateSettings,
} from "../../services/adminService";

interface Settings {
  site_name: string;
  site_description: string;
  maintenance_mode: boolean;
  registration_enabled: boolean;
  email_verification_required: boolean;
  max_upload_size_mb: number;
}

const defaultSettings: Settings = {
  site_name: "DevTools Hub",
  site_description: "Developer tools platform",
  maintenance_mode: false,
  registration_enabled: true,
  email_verification_required: false,
  max_upload_size_mb: 10,
};

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const res = await getSettings();

      setSettings(res.data);
    } catch {
      toast.error("Failed to load settings");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    field: keyof Settings,
    value: string | boolean | number,
  ) => {
    setSettings((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      const res = await updateSettings(settings);

      setSettings(res.data);

      toast.success("Settings updated successfully");
    } catch {
      toast.error("Failed to update settings");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <p className="text-slate-500">
          Loading settings...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          System Settings
        </h1>

        <p className="mt-1 text-slate-500">
          Manage global DevTools Hub application settings.
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 shadow">
        <div className="space-y-6">

          {/* Site Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Site Name
            </label>

            <input
              type="text"
              value={settings.site_name}
              onChange={(e) =>
                handleChange("site_name", e.target.value)
              }
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Site Description */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Site Description
            </label>

            <textarea
              value={settings.site_description}
              onChange={(e) =>
                handleChange("site_description", e.target.value)
              }
              rows={4}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Maintenance */}
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <h3 className="font-semibold text-slate-900">
                Maintenance Mode
              </h3>

              <p className="text-sm text-slate-500">
                Temporarily put the application into maintenance mode.
              </p>
            </div>

            <input
              type="checkbox"
              checked={settings.maintenance_mode}
              onChange={(e) =>
                handleChange(
                  "maintenance_mode",
                  e.target.checked,
                )
              }
              className="h-5 w-5"
            />
          </div>

          {/* Registration */}
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <h3 className="font-semibold text-slate-900">
                User Registration
              </h3>

              <p className="text-sm text-slate-500">
                Allow new users to register accounts.
              </p>
            </div>

            <input
              type="checkbox"
              checked={settings.registration_enabled}
              onChange={(e) =>
                handleChange(
                  "registration_enabled",
                  e.target.checked,
                )
              }
              className="h-5 w-5"
            />
          </div>

          {/* Email Verification */}
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <h3 className="font-semibold text-slate-900">
                Email Verification
              </h3>

              <p className="text-sm text-slate-500">
                Require users to verify their email address.
              </p>
            </div>

            <input
              type="checkbox"
              checked={settings.email_verification_required}
              onChange={(e) =>
                handleChange(
                  "email_verification_required",
                  e.target.checked,
                )
              }
              className="h-5 w-5"
            />
          </div>

          {/* Upload Size */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Maximum Upload Size (MB)
            </label>

            <input
              type="number"
              min={1}
              value={settings.max_upload_size_mb}
              onChange={(e) =>
                handleChange(
                  "max_upload_size_mb",
                  Number(e.target.value),
                )
              }
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Save */}
          <div className="flex justify-end border-t pt-6">
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Settings"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
