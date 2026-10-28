---
title: "Exercise LA608: Regular and Irregular Cusps at Level Four"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.8, Exercise 3.8.7, printed p. 106, PDF p. 120"
source_refs:
  - "S7/ch-3/sec-8/ex-7"
created: 2026-10-28
---

# Exercise LA608: Regular and Irregular Cusps at Level Four

## Problem Statement

> [!question] Original Exercise 3.8.7
> Show that then when $k$ is odd, all cusps of $\Gamma(4)$ are regular and only the cusp $s=1/2$ is irregular for $\Gamma_1(4)$. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> For $\Gamma(4)$ use its normality and the stabilizer at infinity.

> [!hint]- Hint 2
> For $\Gamma_1(4)$ inspect the three representatives $\infty,0,1/2$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Regularity is a property of the stabilizer, independent of the odd integer chosen; its effect on odd-weight Fourier expansions is the possible sign. Let $T=\begin{pmatrix}1&1\\0&1\end{pmatrix}$. At infinity the stabilizer of $\Gamma(4)$ is $\langle T^4\rangle$: a negative translation has both diagonal entries $-1$, hence cannot be congruent to $I$ modulo four. Normality of $\Gamma(4)$ in $\operatorname{SL}_2(\mathbb Z)$ conjugates every rational cusp stabilizer to this one, so all six cusps are regular.
>
> For $\Gamma_1(4)$, the complete cusp set is $\infty,0,1/2$. At infinity its stabilizer is $\langle T\rangle$, since a negative translation again has wrong diagonal entries. At zero, conjugating by $S$ gives $ST^nS^{-1}=\begin{pmatrix}1&0\\-n&1\end{pmatrix}$, whose least positive admissible $n$ is four; no negative translate has the required diagonal residues. These two cusps are regular.
>
> At $1/2$, choose $\alpha=\begin{pmatrix}1&0\\2&1\end{pmatrix}$. Then
> $$
> \alpha T^n\alpha^{-1}=\begin{pmatrix}1-2n&n\\-4n&1+2n\end{pmatrix}.
> $$
> The positive matrix belongs to $\Gamma_1(4)$ exactly when $n$ is even; its negative belongs exactly when $n$ is odd. Thus the conjugated stabilizer is $\langle -T\rangle$, and $1/2$ is irregular. In odd weight this gives $F(\tau+1)=-F(\tau)$ at that cusp, with half-integral surface exponents, while the regular cusps have integral exponents. Exhaustiveness of the three cusp representatives proves uniqueness.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 106 / PDF 120. The solution above is independently derived.
- **Routing:** The principal toolkit is linear-algebra; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
