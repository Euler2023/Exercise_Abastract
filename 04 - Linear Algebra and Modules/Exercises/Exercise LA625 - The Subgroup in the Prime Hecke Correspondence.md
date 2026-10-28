---
title: "Exercise LA625: The Subgroup in the Prime Hecke Correspondence"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.2, Exercise 5.2.1, printed p. 176, PDF p. 190"
source_refs:
  - "S7/ch-5/sec-2/ex-1"
created: 2026-10-28
---

# Exercise LA625: The Subgroup in the Prime Hecke Correspondence

## Problem Statement

> [!question] Original Exercise 5.2.1
> Show that when $\Gamma_1=\Gamma_2=\Gamma_1(N)$ and $\alpha=\begin{pmatrix}1&0\\0&p\end{pmatrix}$, the group $\Gamma_3=\alpha^{-1}\Gamma_1\alpha\cap\Gamma_2$ works out to $\Gamma_1^0(N,p)$.
>
> Here $p$ is prime, $\Gamma_1(N)$ consists of determinant-one integer matrices with $a\equiv d\equiv1$ and $c\equiv0\pmod N$, and $\Gamma_1^0(N,p)=\Gamma_1(N)\cap\Gamma^0(p)$, where $\Gamma^0(p)$ means $p\mid b$.

## Hints

> [!hint]- Hint 1
> Start with a matrix already in $\Gamma_2$.

> [!hint]- Hint 2
> Membership in $\alpha^{-1}\Gamma_1\alpha$ is equivalent to integrality and the congruence conditions for $\alpha g\alpha^{-1}$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let $g=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\Gamma_1(N)$. It belongs to $\alpha^{-1}\Gamma_1(N)\alpha$ precisely when
> $$
> \alpha g\alpha^{-1}=\begin{pmatrix}a&b/p\\pc&d\end{pmatrix}
> $$
> belongs to $\Gamma_1(N)$. Its determinant is already $1$. Its diagonal entries already equal $1$ modulo $N$, and $N\mid pc$ because $N\mid c$. The only remaining requirement is integrality of $b/p$, namely $p\mid b$.
>
> Thus
> $$
> g\in\alpha^{-1}\Gamma_1(N)\alpha\cap\Gamma_1(N)
> \Longleftrightarrow g\in\Gamma_1(N),\ p\mid b
> \Longleftrightarrow g\in\Gamma_1^0(N,p).
> $$
> This proves both inclusions, whether or not $p$ divides $N$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.2.1, printed p. 176 / PDF p. 190]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Source context:** The defining subgroup conditions and the representative construction were checked on printed p. 170 / PDF p. 184.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
