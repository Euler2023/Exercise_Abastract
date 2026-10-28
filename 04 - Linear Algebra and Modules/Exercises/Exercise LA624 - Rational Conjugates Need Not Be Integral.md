---
title: "Exercise LA624: Rational Conjugates Need Not Be Integral"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.1, Exercise 5.1.1, printed p. 167, PDF p. 181"
source_refs:
  - "S7/ch-5/sec-1/ex-1"
created: 2026-10-28
---

# Exercise LA624: Rational Conjugates Need Not Be Integral

## Problem Statement

> [!question] Original Exercise 5.1.1
> In Lemma 5.1.1, need $\alpha^{-1}\Gamma\alpha$ lie in $SL_2(\mathbb Z)$?
>
> **Referenced Lemma 5.1.1, printed p. 164 / PDF p. 178.** If $\Gamma$ is a congruence subgroup and $\alpha\in GL_2^+(\mathbb Q)$, then $\alpha^{-1}\Gamma\alpha\cap SL_2(\mathbb Z)$ is a congruence subgroup of $SL_2(\mathbb Z)$.

## Hints

> [!hint]- Hint 1
> Try the full modular group and a diagonal matrix with unequal entries.

> [!hint]- Hint 2
> Conjugate $S=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ by $\operatorname{diag}(1,2)$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> No. Take $\Gamma=SL_2(\mathbb Z)$ and
> $$
> \alpha=\begin{pmatrix}1&0\\0&2\end{pmatrix},\qquad
> S=\begin{pmatrix}0&-1\\1&0\end{pmatrix}\in\Gamma.
> $$
> The positive rational determinant of $\alpha$ is $2$. Direct multiplication gives
> $$
> \alpha^{-1}S\alpha=\begin{pmatrix}0&-2\\1/2&0\end{pmatrix}.
> $$
> Its determinant is $1$, but its lower left entry is nonintegral. The conjugate need only lie in $SL_2(\mathbb Q)$.
>
> The integral intersection in this example can also be identified. For $g=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\Gamma$,
> $$
> \alpha^{-1}g\alpha=\begin{pmatrix}a&2b\\c/2&d\end{pmatrix}
> $$
> is integral exactly when $c$ is even. Its integral values are precisely $\Gamma^0(2)$, the determinant-one integer matrices whose upper right entry is even. Conversely, every $\begin{pmatrix}a&B\\C&d\end{pmatrix}\in\Gamma^0(2)$ arises from $g=\begin{pmatrix}a&B/2\\2C&d\end{pmatrix}\in\Gamma$. Thus the intersection contains $\Gamma(2)$ as the lemma requires, while the uncut conjugate is not integral.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.1.1, printed p. 167 / PDF p. 181]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Source context:** Lemma 5.1.1 was also checked on printed p. 164 / PDF p. 178. The counterexample and exact intersection are independent calculations.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
