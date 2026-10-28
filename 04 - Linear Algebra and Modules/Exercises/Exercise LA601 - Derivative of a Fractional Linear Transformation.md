---
title: "Exercise LA601: Derivative of a Fractional Linear Transformation"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.3, Exercise 3.3.3, printed p. 83, PDF p. 97"
source_refs:
  - "S7/ch-3/sec-3/ex-3"
created: 2026-10-28
---

# Exercise LA601: Derivative of a Fractional Linear Transformation

## Problem Statement

> [!question] Original Exercise 3.3.3
> For $\gamma\in GL_2(\mathbb C)$, show that $\gamma^\prime(\tau)=\det\gamma/j(\gamma,\tau)^2$. (This generalizes Lemma 1.2.2(e).)
>
> Here $\gamma(\tau)=(a\tau+b)/(c\tau+d)$ and $j(\gamma,\tau)=c\tau+d$ for $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}$.

## Hints

> [!hint]- Hint 1
> Apply the quotient rule wherever $c\tau+d\ne0$.

> [!hint]- Hint 2
> The numerator simplifies to $ad-bc$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> At a finite point where $c\tau+d\ne0$, the quotient rule gives
> $$
> \begin{aligned}
> \gamma^\prime(\tau)
> &=\frac{a(c\tau+d)-c(a\tau+b)}{(c\tau+d)^2}\\
> &=\frac{ad-bc}{(c\tau+d)^2}
> =\frac{\det\gamma}{j(\gamma,\tau)^2}.
> \end{aligned}
> $$
> Since $\det\gamma\ne0$, the derivative does not vanish on this domain. If $c=0$, the map is affine and the same formula gives $a/d$ because $\det\gamma=ad$. If $c\ne0$, the excluded point $-d/c$ is a pole; the formula there is a meromorphic identity, not a finite derivative value.
>
> Scaling the representative matrix by $\lambda\ne0$ multiplies the determinant and the denominator squared by the same factor $\lambda^2$. Thus the formula depends only on the fractional linear transformation. In the determinant-one case it becomes $(c\tau+d)^{-2}$, the earlier lemma.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 83 / PDF 97. The solution above is independently derived.
- **Domain:** For a general complex matrix its pole can lie in the upper half-plane. The finite-coordinate derivative formula is asserted away from that pole; it also describes a meromorphic identity.
- **Routing:** The principal toolkit is linear-algebra; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
