import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 max-w-4xl">
        <div className="mb-8">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              By accessing and using Learn Data Analytics, you accept and agree to be bound
              by these Terms of Service. If you do not agree to these terms, please do not
              use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              2. Use of Service
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              You agree to use Learn Data Analytics only for lawful purposes and in accordance
              with these Terms. You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
              <li>Use the service in any way that violates applicable laws</li>
              <li>Attempt to gain unauthorized access to any part of the platform</li>
              <li>Interfere with or disrupt the service or servers</li>
              <li>Upload or transmit viruses or malicious code</li>
              <li>Collect or harvest information about other users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              3. Educational Content
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              All educational content, including lessons, projects, tools, and datasets
              provided on this platform, is for educational purposes only. While we strive
              for accuracy, we make no guarantees about the completeness or reliability
              of the content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              4. Intellectual Property
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              All content on Learn Data Analytics, including text, graphics, logos, and
              software, is the property of Learn Data Analytics or its licensors and is
              protected by copyright and other intellectual property laws. You may use
              the content for personal learning purposes but not for commercial use
              without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              5. User Conduct
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              When using our platform, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
              <li>Use the service in good faith for learning purposes</li>
              <li>Respect the rights of other users</li>
              <li>Not share or distribute course materials without permission</li>
              <li>Report any bugs or security issues you discover</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              6. Disclaimer of Warranties
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The service is provided "as is" and "as available" without warranties of any
              kind, either express or implied. We do not guarantee that the service will
              be uninterrupted, secure, or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Learn Data Analytics shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages resulting from your use or inability to use
              the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              8. Changes to Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users
              of any material changes. Your continued use of the platform after changes
              constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              9. Termination
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We may terminate or suspend your access to the service immediately, without
              prior notice, for any reason, including breach of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              10. Contact Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              If you have questions about these Terms of Service, please contact us at{" "}
              <a
                href="mailto:legal@learndataanalytics.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                legal@learndataanalytics.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
