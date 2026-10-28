---
title: "Exercise F145: Frobenius and Polynomial Evaluation"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.2, Exercise 8.2.2, printed p. 326, PDF p. 339"
source_refs:
  - "S7/ch-8/sec-2/ex-2"
created: 2026-10-28
---

# Exercise F145: Frobenius and Polynomial Evaluation

## Problem Statement

> [!question] Original Exercise 8.2.2
> Verify (8.12).

> **Context and notation.** Equation (8.12) is
> $$
> \varphi^{\sigma_p}(X^{\sigma_p})=\varphi(X)^{\sigma_p},
> $$
> where $\sigma_p(a)=a^p$ and $\varphi^{\sigma_p}$ means applying $\sigma_p$ to all coefficients of $\varphi$.

## Hints

> [!hint]- Hint 1
> Apply Frobenius to each coefficient and each coordinate.

> [!hint]- Hint 2
> The $p$th power of a sum equals the sum of the $p$th powers in characteristic $p$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Write the homogeneous polynomial as $\varphi(X)=\sum_{\mathbf m}a_{\mathbf m}X^{\mathbf m}$, where $X^{\mathbf m}=\prod_i X_i^{m_i}$. Let $\sigma_p(a)=a^p$. The characteristic-$p$ binomial theorem gives
> $$
> \begin{aligned}
> \varphi(X)^{\sigma_p}
> &=\left(\sum_{\mathbf m}a_{\mathbf m}\prod_iX_i^{m_i}\right)^p\\
> &=\sum_{\mathbf m}a_{\mathbf m}^{\,p}\prod_i(X_i^p)^{m_i}\\
> &=\varphi^{\sigma_p}(X^{\sigma_p}).
> \end{aligned}
> $$
> This proves (8.12), either as a polynomial identity or after evaluation at a point. If $X$ is replaced by a nonzero scalar multiple, homogeneity changes each side by the same nonzero scalar power, so the associated vanishing statement is well defined in projective space. In particular $\varphi(X)=0$ implies $\varphi^{\sigma_p}(X^{\sigma_p})=0$.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 326 / PDF p. 339. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
