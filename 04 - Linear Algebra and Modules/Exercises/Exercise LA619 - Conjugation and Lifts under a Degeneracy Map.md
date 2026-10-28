---
title: "Exercise LA619: Conjugation and Lifts under a Degeneracy Map"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 6, Section 6.6, Exercise 6.6.4, printed p. 251, PDF p. 265"
source_refs:
  - "S7/ch-6/sec-6/ex-4"
created: 2026-10-28
---

# Exercise LA619: Conjugation and Lifts under a Degeneracy Map

## Problem Statement

> [!question] Original Exercise 6.6.4
> (a) For any $\gamma\in\Gamma_1(N)$ and any positive integer $n\mid N/M_f$, show that
> $$
> \begin{pmatrix}n&0\\0&1\end{pmatrix}\gamma\begin{pmatrix}n&0\\0&1\end{pmatrix}^{-1}\in\Gamma_1(M_f).
> $$
> (b) Suppose that the path $\alpha:[0,1]\longrightarrow\mathcal H$ is the lift of a loop in $X_1(N)$. Show that $\widetilde\alpha(t)=n\alpha(t)$ is the lift of a loop in $X_1(M_f)$.

## Hints

> [!hint]- Hint 1
> Calculate all four entries of the conjugated matrix.

> [!hint]- Hint 2
> Two endpoints represent the same point of a modular curve precisely when they are related by its group.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a).** Write $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}$. Its conjugate is
> $$
> \gamma'=\begin{pmatrix}a&nb\\c/n&d\end{pmatrix}.
> $$
> Because $n\mid N/M_f$, the entry $c/n$ is an integer divisible by $M_f$. Also $a,d\equiv1\pmod N$ implies $a,d\equiv1\pmod{M_f}$, and $\det\gamma'=1$. These are exactly the defining conditions for $\Gamma_1(M_f)$.
>
> **(b).** Since the projected path is closed, there is $\gamma\in\Gamma_1(N)$ with $\alpha(1)=\gamma\alpha(0)$; equality in the effective quotient suffices and a representative in the matrix group can be chosen. Then
> $$
> \widetilde\alpha(1)=n\gamma\alpha(0)=\gamma'\big(n\alpha(0)\big)=\gamma'\widetilde\alpha(0).
> $$
> Part (a) puts $\gamma'$ in the target group. Thus the projection of $\widetilde\alpha$ is a closed path. It is the image under the degeneracy map induced by $\tau\mapsto n\tau$ and has the asserted lift. The stated lift lies in $\mathcal H$, so no cusp endpoint is being assumed.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]
- [[07 - Modular Forms/Concepts/Modular Curves and Moduli|Modular Curves and Moduli]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
