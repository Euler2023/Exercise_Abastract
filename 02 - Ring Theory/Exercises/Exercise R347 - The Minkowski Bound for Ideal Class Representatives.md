---
title: "Exercise R347: The Minkowski Bound for Ideal Class Representatives"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §6, Exercise 3, printed p. 38, PDF p. 57"
created: 2026-10-20
---

# Exercise R347: The Minkowski Bound for Ideal Class Representatives

## Problem Statement

> [!question] Neukirch I.6.3
> Show that in every ideal class of an algebraic number field $K$ of degree $n$, there exists an integral ideal $\mathfrak a$ such that
> $$
> \mathfrak N(\mathfrak a)\le\frac{n!}{n^n}\left(\frac4\pi\right)^s\sqrt{|d_K|}.
> $$
> **Printed hint:** Using exercise $3$, §$5$, proceed as in the proof of (6.3).

## Hints

> [!hint]- Hint 1: Represent the inverse class integrally
> For a fractional ideal $\mathfrak c$ in the desired class choose $0\ne\gamma\in\mathcal O_K$ clearing the denominators of $\mathfrak c^{-1}$, and put $\mathfrak b=\gamma\mathfrak c^{-1}$.

> [!hint]- Hint 2: Find a small nonzero element
> Exercise I.5.3 gives $0\ne\alpha\in\mathfrak b$ with $|N(\alpha)|\le M\mathfrak N(\mathfrak b)$, where $M$ is the desired constant.

> [!hint]- Hint 3: Divide the principal ideal by the containing ideal
> Take $\mathfrak a=(\alpha)\mathfrak b^{-1}$. Check integrality, its class, and its norm separately.

## Solution

> [!success]- Independent derivation
>
> Put
> $$
> M=\frac{n!}{n^n}\left(\frac4\pi\right)^s\sqrt{|d_K|}.
> $$
> The source inputs are that nonzero fractional ideals in $\mathcal O_K$ are invertible, and that their positive rational norm is multiplicative, with $\mathfrak N((x))=|N_{K/\mathbb Q}(x)|$. For integral ideals the norm is the additive index. Exercise I.5.3 supplies a nonzero element of any nonzero integral ideal $\mathfrak b$ with $|N(\alpha)|\le M\mathfrak N(\mathfrak b)$.
>
> Fix a class $[\mathfrak c]$. Choose $\gamma\ne0$ in $\mathcal O_K$ such that $\mathfrak b=\gamma\mathfrak c^{-1}\subseteq\mathcal O_K$; this is possible by clearing denominators of a finite generating set of the fractional ideal. Then $\mathfrak b$ is nonzero and integral, and $[\mathfrak b]=[\mathfrak c]^{-1}$. Choose $\alpha$ by I.5.3 and set
> $$
> \mathfrak a=(\alpha)\mathfrak b^{-1}.
> $$
> Since $\alpha\in\mathfrak b$, multiplication of $(\alpha)\subseteq\mathfrak b$ by $\mathfrak b^{-1}$ gives $\mathfrak a\subseteq\mathcal O_K$. Thus it is an integral ideal; it is nonzero because neither factor is zero. Its class is
> $$
> [\mathfrak a]=[(\alpha)][\mathfrak b]^{-1}=[\mathfrak c].
> $$
> Finally multiplicativity gives
> $$
> \mathfrak N(\mathfrak a)
> =\frac{|N_{K/\mathbb Q}(\alpha)|}{\mathfrak N(\mathfrak b)}\le M.
> $$
> This proves the asserted representative in every class. In particular this deduction does not require knowing the order of the class group. Together with finiteness of ideals of bounded norm, it also gives a proof of class-group finiteness with this sharper constant.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Invertible Fractional Ideals]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA539 - Minkowskis Bound for Elements of an Ideal|Minkowski's Bound for Ideal Elements]]

## Notes

- **Source verification:** The complete exercise and any printed hint were visually checked in [S4, Ch. I, §6, Exercise 3, printed p. 38, PDF p. 57]. No source figure is required.
- **Source inputs:** Norm multiplicativity and the principal-ideal formula were visually checked at [S4, Ch. I, §6, Proposition (6.1), printed p. 35, PDF p. 54]. The source proof of (6.3), printed p. 36 / PDF p. 55, uses the same inverse-class construction with the weaker constant from (6.2). I.5.3 is independently proved in LA539, including its non-strict endpoint.
- **Proof status:** The class, integrality, and norm checks above are an independent derivation of this exercise. This note does not cite I.6.2 or any computed class number, so its use there is noncircular.
- **Routing:** Ideal inversion and the quotient by principal ideals are the main operations; the geometry-of-numbers estimate is an explicit imported input.
