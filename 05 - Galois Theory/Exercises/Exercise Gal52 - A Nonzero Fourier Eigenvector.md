---
title: "Exercise Gal52: A Nonzero Fourier Eigenvector"
topic: galois-theory
difficulty: intermediate
status: not-started
tags: [exercise, galois-theory, kummer-extensions]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 10, Ex. 10.10, printed p. 510, PDF p. 522"
created: 2026-08-12
---

# Exercise Gal52: A Nonzero Fourier Eigenvector

## Problem Statement

> [!question] Exercise 10.10
> With regard to the eigenvector $\gamma$ described at the end of Section 16.11, show that at least one of the elements $\gamma_i = \alpha_1 + \zeta^i \alpha_2 + \cdots + \zeta^{(p-1)i}\alpha_p$ isn't zero.

> [!info] Relevant Text from Section 16.11 (Kummer Extensions, printed pp. 500–501, PDF pp. 512–513)
> **Setting (Theorem 16.11.1):**
> Let $F$ be a subfield of $\mathbb{C}$ that contains the $p$th root of unity $\zeta = e^{2\pi i/p}$ ($p$ prime), and let $K/F$ be a Galois extension of degree $p$.
> We view $K$ as a vector space over $F$, and a generator $\sigma$ of the cyclic Galois group $G(K/F)$ as a linear operator on $K$. Since $\sigma^p = 1$, any eigenvalue $\lambda$ of $\sigma$ satisfies $\lambda^p = 1$, so $\lambda$ is a power of $\zeta$.
> 
> **Construction of the Eigenvector $\beta$ (Artin, p. 501, formula 16.11.3):**
> > "With notation as in Theorem 16.11.1, say that $K$ is the splitting field over $F$ of an irreducible polynomial $f$ of degree $p$. There is a simple expression in the roots of $f$ that often yields an eigenvector for the operator $\sigma$. The permutation of the roots $\alpha_1, \dots, \alpha_p$ of $f$ that is defined by $\sigma$ will be cyclic, so if we number the roots appropriately, $\sigma$ will be the permutation $(1\, 2\, \cdots\, p)$. Let $\lambda$ be an eigenvalue of $\sigma$, and let
> > > $$
> > > \beta = \alpha_1 + \lambda \alpha_2 + \cdots + \lambda^{p-1}\alpha_p. \tag{16.11.3}
> > > $$
> > Then $\sigma(\beta) = \alpha_2 + \lambda \alpha_3 + \cdots + \lambda^{p-2}\alpha_p + \lambda^{p-1}\alpha_1 = \lambda^{-1}\beta$. So unless $\beta$ happens to be zero, it will be an eigenvector with eigenvalue $\lambda^{-1}$."
> 
> In Exercise 10.10, Artin labels these elements $\gamma$ (or $\gamma_i$), corresponding to setting the eigenvalue parameter $\lambda = \zeta^i$ for $i = 0, 1, \dots, p-1$:
> > $$
> > \gamma_i = \alpha_1 + \zeta^i \alpha_2 + \cdots + \zeta^{(p-1)i}\alpha_p.
> > $$

## Hints

> [!hint]- Hint 1
> Relate the column vector $(\gamma_0, \gamma_1, \dots, \gamma_{p-1})^T$ to $(\alpha_1, \alpha_2, \dots, \alpha_p)^T$ via the $p \times p$ discrete Fourier transform / Vandermonde matrix $V = (\zeta^{ij})_{0 \le i, j < p}$.

> [!hint]- Hint 2
> Express $\det(V)$ using the Vandermonde product formula. Since $\zeta^0, \zeta^1, \dots, \zeta^{p-1}$ are distinct $p$th roots of unity, show that $V$ is invertible. What would $\gamma_0 = \gamma_1 = \cdots = \gamma_{p-1} = 0$ imply for the roots $\alpha_j$?

## Solution

> [!success]- Solution
> Following the notation established in Section 16.11, let $K/F$ be a Galois extension of prime degree $p$ containing a primitive $p$th root of unity $\zeta = e^{2\pi i/p}$, with cyclic Galois group $G(K/F) = \langle \sigma \rangle$. Let $K$ be the splitting field of an irreducible polynomial $f(x) \in F[x]$ of degree $p$, whose distinct roots $\alpha_1, \alpha_2, \dots, \alpha_p$ are cyclically permuted by $\sigma = (1\, 2\, \dots\, p)$.
> 
> For each $i \in \{0, 1, \dots, p-1\}$, define:
> > $$
> > \gamma_i = \alpha_1 + \zeta^i \alpha_2 + \zeta^{2i} \alpha_3 + \cdots + \zeta^{(p-1)i}\alpha_p = \sum_{j=0}^{p-1} \zeta^{ij}\alpha_{j+1}.
> > $$
> In matrix notation, this system of $p$ equations can be expressed as:
> > $$
> > \begin{pmatrix}
> > \gamma_0 \\
> > \gamma_1 \\
> > \gamma_2 \\
> > \vdots \\
> > \gamma_{p-1}
> > \end{pmatrix}
> > =
> > \begin{pmatrix}
> > 1 & 1 & 1 & \cdots & 1 \\
> > 1 & \zeta & \zeta^2 & \cdots & \zeta^{p-1} \\
> > 1 & \zeta^2 & \zeta^4 & \cdots & \zeta^{2(p-1)} \\
> > \vdots & \vdots & \vdots & \ddots & \vdots \\
> > 1 & \zeta^{p-1} & \zeta^{2(p-1)} & \cdots & \zeta^{(p-1)(p-1)}
> > \end{pmatrix}
> > \begin{pmatrix}
> > \alpha_1 \\
> > \alpha_2 \\
> > \alpha_3 \\
> > \vdots \\
> > \alpha_p
> > \end{pmatrix}.
> > $$
> The $p \times p$ coefficient matrix $V = (\zeta^{ij})_{0 \le i, j < p}$ is the discrete Fourier transform matrix, which is a Vandermonde matrix with nodes $x_j = \zeta^j$ for $j = 0, 1, \dots, p-1$.
> Its determinant is given by the Vandermonde formula:
> > $$
> > \det(V) = \prod_{0 \le j < k \le p-1} (\zeta^k - \zeta^j).
> > $$
> Because $p$ is prime and $\zeta$ is a primitive $p$th root of unity, the powers $1, \zeta, \zeta^2, \dots, \zeta^{p-1}$ are pairwise distinct in $\mathbb{C}$.
> Consequently, each factor $(\zeta^k - \zeta^j) \neq 0$, which implies:
> > $$
> > \det(V) \neq 0.
> > $$
> Hence, the matrix $V$ is invertible.
> 
> Now suppose for the sake of contradiction that all $\gamma_i = 0$ for $i = 0, 1, \dots, p-1$. Then:
> > $$
> > V \begin{pmatrix} \alpha_1 \\ \alpha_2 \\ \vdots \\ \alpha_p \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ \vdots \\ 0 \end{pmatrix}.
> > $$
> Multiplying on the left by $V^{-1}$ yields:
> > $$
> > \begin{pmatrix} \alpha_1 \\ \alpha_2 \\ \vdots \\ \alpha_p \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ \vdots \\ 0 \end{pmatrix},
> > $$
> so $\alpha_1 = \alpha_2 = \cdots = \alpha_p = 0$.
> 
> However, $f(x)$ is an irreducible polynomial of degree $p \ge 2$ over $F$ (or $K/F$ is a degree-$p$ extension generated by the roots $\alpha_j$). The roots of an irreducible polynomial of degree $p \ge 2$ cannot all be zero (if $\alpha = 0$, then $x \mid f(x)$, contradicting irreducibility).
> 
> This contradiction proves that not all $\gamma_i$ can be zero; that is, at least one of the elements $\gamma_i$ is nonzero ($\gamma_i \neq 0$).

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[05 - Galois Theory/Concepts/Kummer Extensions|Kummer Extensions]]
- [[05 - Galois Theory/Concepts/Cyclic Extensions|Cyclic Extensions]]
- [[Cyclotomic Extensions]]

## Notes

> [!note] Source notation and cross-reference
> 1. **Original printing & marking:** Artin, *Algebra* (2nd ed.), Ch. 16, Section 10, Exercise 10.10, printed p. 510, PDF p. 522. In the source printing, this exercise does **not** carry an asterisk `*` (which Artin uses to mark harder problems, e.g. `*9.14`, `*9.15`, `*11.3`).
> 2. **Cross-reference in source:** The prompt references "the eigenvector $\gamma$ described at the end of Section 16.11" (referring to formula (16.11.3) on printed p. 501, PDF p. 513 in Section 16.11 *Kummer Extensions*, where cyclic Galois generators and Lagrange resolvents $\beta = \alpha_1 + \lambda \alpha_2 + \cdots + \lambda^{p-1}\alpha_p$ are introduced), although the exercise itself is placed at the end of Section 10 (*Roots of Unity*).
> 3. **Lagrange Resolvents and Kummer Theory:** The elements $\gamma_i$ are classic Lagrange resolvents. Inversion of the discrete Fourier matrix gives $\alpha_{j+1} = \frac{1}{p}\sum_{i=0}^{p-1}\zeta^{-ij}\gamma_i$. For any $i \not\equiv 0 \pmod p$ such that $\gamma_i \neq 0$, the element $\gamma_i$ is an eigenvector of $\sigma$ with eigenvalue $\zeta^{-i} \neq 1$, and its $p$th power $\gamma_i^p$ is invariant under $\sigma$, thus lying in the base field $F$. This provides the explicit Kummer generator $K = F(\gamma_i)$ with $\gamma_i^p \in F$.

