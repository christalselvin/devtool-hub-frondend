import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import NotFoundPage from "../pages/NotFoundPage";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "../components/common/ProtectedRoute";
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

// SEO Tool Pages (Public)
import JsonFormatterSEOPage from "../pages/devtools/JsonFormatterSEOPage";
import JsonValidatorSEOPage from "../pages/devtools/JsonValidatorSEOPage";
import Base64EncoderSEOPage from "../pages/devtools/Base64EncoderSEOPage";
import Base64DecoderSEOPage from "../pages/devtools/Base64DecoderSEOPage";
import JwtDecoderSEOPage from "../pages/devtools/JwtDecoderSEOPage";
import UuidGeneratorSEOPage from "../pages/devtools/UuidGeneratorSEOPage";
import RegexTesterSEOPage from "../pages/devtools/RegexTesterSEOPage";
import UrlEncoderSEOPage from "../pages/devtools/UrlEncoderSEOPage";
import TimestampConverterSEOPage from "../pages/devtools/TimestampConverterSEOPage";
import QrCodeGeneratorSEOPage from "../pages/devtools/QrCodeGeneratorSEOPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<HomePage />} />

        {/* SEO Tool Pages (Public) */}
        <Route path="/devtools/json-formatter" element={<JsonFormatterSEOPage />} />
        <Route path="/devtools/json-validator" element={<JsonValidatorSEOPage />} />
        <Route path="/devtools/base64-encoder" element={<Base64EncoderSEOPage />} />
        <Route path="/devtools/base64-decoder" element={<Base64DecoderSEOPage />} />
        <Route path="/devtools/jwt-decoder" element={<JwtDecoderSEOPage />} />
        <Route path="/devtools/uuid-generator" element={<UuidGeneratorSEOPage />} />
        <Route path="/devtools/regex-tester" element={<RegexTesterSEOPage />} />
        <Route path="/devtools/url-encoder" element={<UrlEncoderSEOPage />} />
        <Route path="/devtools/timestamp-converter" element={<TimestampConverterSEOPage />} />
        <Route path="/devtools/qr-code-generator" element={<QrCodeGeneratorSEOPage />} />

        {/* Auth Pages */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* Protected Pages */}
        <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
          <Route path="/dashboard" element={<DashboardPage />} />
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
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/billing" element={<BillingPage />} />
          <Route path="/admin" element={<ProtectedRoute><AdminDashboardPage /></ProtectedRoute>} />
          <Route path="/admin/analytics" element={<ProtectedRoute><AnalyticsPage /></ProtectedRoute>} />
          <Route path="/admin/audit-logs" element={<ProtectedRoute><AuditLogsPage /></ProtectedRoute>} />
        </Route>

        <Route path="/admin/users" element={<ProtectedRoute><UsersPage /></ProtectedRoute>} />
        <Route path="/admin/roles" element={<ProtectedRoute><RolesPage /></ProtectedRoute>} />
        <Route path="/admin/permissions" element={<ProtectedRoute><PermissionsPage /></ProtectedRoute>} />
        <Route path="/admin/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />

        {/* 404 Fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
