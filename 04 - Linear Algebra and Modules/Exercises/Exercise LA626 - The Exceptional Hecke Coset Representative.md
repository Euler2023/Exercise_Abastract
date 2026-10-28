---
title: "Exercise LA626: The Exceptional Hecke Coset Representative"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.2, Exercise 5.2.2, printed p. 176, PDF p. 190"
source_refs:
  - "S7/ch-5/sec-2/ex-2"
created: 2026-10-28
---

# Exercise LA626: The Exceptional Hecke Coset Representative

## Problem Statement

> [!question] Original Exercise 5.2.2
> When $\gamma_2=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ with $p\mid a$, show that $\gamma_2\gamma_{2,\infty}^{-1}\in\Gamma_3$ as needed.
>
> **Referenced data, printed p. 170 / PDF p. 184.** Here $\gamma_2\in\Gamma_1(N)$, $p\nmid N$, $mp-nN=1$,
> $$
> \gamma_{2,\infty}=\begin{pmatrix}mp&n\\N&1\end{pmatrix},\qquad
> \Gamma_3=\Gamma_1(N)\cap\Gamma^0(p).
> $$

## Hints

> [!hint]- Hint 1
> The exceptional matrix itself belongs to $\Gamma_1(N)$.

> [!hint]- Hint 2
> Compute the upper right entry of the product; the other membership conditions follow from closure of the group.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> The identity $mp-nN=1$ gives determinant $1$ and $mp\equiv1\pmod N$. Hence $\gamma_{2,\infty}\in\Gamma_1(N)$. Its inverse and the required product are
> $$
> \gamma_{2,\infty}^{-1}=\begin{pmatrix}1&-n\\-N&mp\end{pmatrix},
> $$
> $$
> \gamma_2\gamma_{2,\infty}^{-1}
> =\begin{pmatrix}a-bN&-an+bmp\\c-dN&-cn+dmp\end{pmatrix}.
> $$
> The product lies in $\Gamma_1(N)$ because both factors do. Its upper right entry $-an+bmp$ is divisible by $p$: the first term is divisible by $p$ by the hypothesis $p\mid a$, and the second has an explicit factor $p$. Thus it also belongs to $\Gamma^0(p)$, proving membership in $\Gamma_3$.
>
> The condition $p\nmid N$ is consistent with the premise: if $p\mid N$, then $a\equiv1\pmod N$ would imply $a\equiv1\pmod p$, contrary to $p\mid a$. It also ensures that the integers $m,n$ exist by Bézout's identity.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.2.2, printed p. 176 / PDF p. 190]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Source context:** The exceptional representative and its Bézout condition were checked on printed p. 170 / PDF p. 184.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
