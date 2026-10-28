---
title: "Exercise AG74: Pullback of Meromorphic Differentials"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.3, Exercise 3.3.1, printed p. 82, PDF p. 96"
source_refs:
  - "S7/ch-3/sec-3/ex-1"
created: 2026-10-28
---

# Exercise AG74: Pullback of Meromorphic Differentials

## Problem Statement

> [!question] Original Exercise 3.3.1
> (a) Show that the pullback is contravariant.
>
> (b) Show that if $\iota:V_1\longrightarrow V_2$ is inclusion then its pullback is the restriction $\iota^*(\omega)=\omega|_{V_1}$ for $\omega\in\Omega^{\otimes n}(V_2)$.
>
> (c) Show that if $\varphi$ is a holomorphic bijection of open sets in $\mathbb C$ then $(\varphi^{-1})^*=(\varphi^*)^{-1}$.
>
> (d) Show that if $\pi:V_1\longrightarrow V_2$ is a holomorphic surjection of open sets in $\mathbb C$ then $\pi^*$ is an injection. If $i:V_1\longrightarrow V_2$ is an injection of open sets in $\mathbb C$, need $i^*$ be a surjection?
>
> **Pullback convention, printed p. 77 / PDF p. 91.** For $\omega=g(q_2)(dq_2)^n$,
> $$
> \varphi^*\omega=g(\varphi(q_1))(\varphi^\prime(q_1))^n(dq_1)^n.
> $$

> [!warning] Source issue
> The surrounding text allows an arbitrary holomorphic map when defining pullback of meromorphic coefficients. A map constant at a pole, such as $\varphi(z)=0$ and coefficient $1/q$, has no such meromorphic composition. The statements are used for nonconstant chart maps; the solution makes that necessary condition explicit. In the last question “injection” is interpreted as a holomorphic injection, as required by the pullback context.

## Hints

> [!hint]- Hint 1
> Apply the chain rule to a composition and compare the resulting coefficient functions.

> [!hint]- Hint 2
> For the final question, restrict a function with an essential singularity on the boundary of a small disk.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> We work with holomorphic maps between domains that are nonconstant, and therefore with well-defined meromorphic pullbacks; disconnected open sets are treated componentwise under this condition.
>
> **(a).** If $\varphi_1:V_1\to V_2$ and $\varphi_2:V_2\to V_3$, then
> $$
> \begin{aligned}
> (\varphi_2\varphi_1)^*(g(q_3)(dq_3)^n)
> &=g(\varphi_2(\varphi_1(q_1)))
> \bigl(\varphi_2^\prime(\varphi_1(q_1))\varphi_1^\prime(q_1)\bigr)^n(dq_1)^n\\
> &=\varphi_1^*(\varphi_2^*(g(q_3)(dq_3)^n)).
> \end{aligned}
> $$
> This is $(\varphi_2\circ\varphi_1)^*=\varphi_1^*\circ\varphi_2^*$, the asserted reversal of order.
>
> **(b).** An inclusion is the identity in the ambient complex coordinate, with derivative $1$. Its pullback simply restricts the coefficient to $V_1$.
>
> **(c).** The imported complex-analysis fact is that a holomorphic bijection between planar domains has a holomorphic inverse. Applying (a) to its compositions with its inverse gives
> $$
> \varphi^*(\varphi^{-1})^*=\operatorname{id},\qquad
> (\varphi^{-1})^*\varphi^*=\operatorname{id}.
> $$
> Thus $(\varphi^{-1})^*=(\varphi^*)^{-1}$.
>
> **(d).** Suppose $\pi^*(g(q)(dq)^n)=0$. Choose a point $z$ with $\pi^\prime(z)\ne0$; such a point exists on every nonconstant source component. On a small neighborhood $U$ of $z$, the map $\pi$ is a holomorphic bijection onto an open set, and the pullback coefficient vanishes only if $g$ vanishes on $\pi(U)$. The identity theorem forces $g$ to vanish on that entire target component. Surjectivity ensures that every target component is reached by a source component. Therefore the pullback is injective.
>
> Restriction need not be surjective. Let $V_1=\{|z|<1\}$, $V_2=\mathbb C$, and $i$ be inclusion. The differential
> $$
> \omega=e^{1/(z-1)}(dz)^n
> $$
> is holomorphic on $V_1$. If it were the restriction of a meromorphic differential on $\mathbb C$, its coefficient would agree with $e^{1/(z-1)}$ on all of $\mathbb C\setminus\{1\}$ by the identity theorem. This is impossible because the latter has an essential singularity at $1$. Hence $i^*$ is not surjective.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 82 / PDF 96. The solution above is independently derived.
- **Imported inputs:** The chain rule, holomorphic inverse theorem and meromorphic identity theorem are used with their domain hypotheses. The final counterexample works in every nonnegative differential degree.
- **Routing:** The principal toolkit is arithmetic-geometry; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
