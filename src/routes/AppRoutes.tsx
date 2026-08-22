import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ToolsPage from "../pages/ToolsPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import NotFoundPage from "../pages/NotFoundPage";
import MainLayout from "../layouts/MainLayout";
import PublicToolLayout from "../layouts/PublicToolLayout";
import ProtectedRoute from "../components/common/ProtectedRoute";
import PermissionRoute from "../components/common/PermissionRoute";
import AuthLayout from "../layouts/AuthLayout";
import JsonFormatterPage from "../pages/JsonFormatterPage";
import Base64Page from "../pages/Base64Page";
import JwtPage from "../pages/JwtPage";
import UuidPage from "../pages/UuidPage";
import PasswordPage from "../pages/PasswordPage";
import HashPage from "../pages/HashPage";
import UrlPage from "../pages/UrlPage";
import TimestampPage from "../pages/TimestampPage";
import QrCodePage from "../pages/QrCodePage";
import RegexPage from "../pages/RegexPage";
import HistoryPage from "../pages/HistoryPage";
import ProfilePage from "../pages/ProfilePage";
import BillingPage from "../pages/BillingPage";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import UsersPage from "../pages/admin/UsersPage";
import RolesPage from "../pages/admin/RolesPage";
import PermissionsPage from "../pages/admin/PermissionsPage";
import AuditLogsPage from "../pages/admin/AuditLogsPage";
import AnalyticsPage from "../pages/admin/AnalyticsPage";
import SettingsPage from "../pages/admin/SettingsPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tools" element={<ToolsPage />} />

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route element={<PublicToolLayout />}>
          <Route path="/tools/json" element={<JsonFormatterPage />} />
          <Route path="/tools/base64" element={<Base64Page />} />
          <Route path="/tools/jwt" element={<JwtPage />} />
          <Route path="/tools/uuid" element={<UuidPage />} />
          <Route path="/tools/password" element={<PasswordPage />} />
          <Route path="/tools/hash" element={<HashPage />} />
          <Route path="/tools/url" element={<UrlPage />} />
          <Route path="/tools/timestamp" element={<TimestampPage />} />
          <Route path="/tools/qr" element={<QrCodePage />} />
          <Route path="/tools/regex" element={<RegexPage />} />
        </Route>

        <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/billing" element={<BillingPage />} />
          <Route path="/admin" element={<PermissionRoute permission="view_dashboard"><AdminDashboardPage /></PermissionRoute>} />
          <Route path="/admin/analytics" element={<PermissionRoute permission="view_dashboard"><AnalyticsPage /></PermissionRoute>} />
          <Route path="/admin/audit-logs" element={<PermissionRoute permission="view_dashboard"><AuditLogsPage /></PermissionRoute>} />
        </Route>

        <Route path="/admin/users" element={<PermissionRoute permission="manage_users"><UsersPage /></PermissionRoute>} />
        <Route path="/admin/roles" element={<PermissionRoute permission="manage_roles"><RolesPage /></PermissionRoute>} />
        <Route path="/admin/permissions" element={<PermissionRoute permission="manage_permissions"><PermissionsPage /></PermissionRoute>} />
        <Route path="/admin/settings" element={<PermissionRoute permission="manage_settings"><SettingsPage /></PermissionRoute>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
