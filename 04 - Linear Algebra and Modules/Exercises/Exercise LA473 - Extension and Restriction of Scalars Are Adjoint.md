---
title: "Exercise LA473: Extension and Restriction of Scalars Are Adjoint"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - tensor-products
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVI, Exercise 4, printed p. 637, PDF p. 652"
created: 2026-09-29
---

# Exercise LA473: Extension and Restriction of Scalars Are Adjoint

## Problem Statement

> [!question] Lang, Chapter XVI, Exercise 4
> Let $\varphi:A\to B$ be a commutative ring homomorphism. Let $E$ be an $A$-module and $F$ a $B$-module. Let $F_A$ be the $A$-module obtained from $F$ via the operation of $A$ on $F$ through $\varphi$, that is for $y\in F_A$ and $a\in A$ this operation is given by
>
> $$
> (a,y)\longmapsto\varphi(a)y.
> $$
>
> Show that there is a natural isomorphism
>
> $$
> \operatorname{Hom}_B(B\otimes_A E,F)
> \approx\operatorname{Hom}_A(E,F_A).
> $$

## Hints

> [!hint]- Hint 1: Evaluate on the tensors with first factor one
> A $B$-linear map $T:B\otimes_A E\to F$ is determined by $T(1\otimes e)$, since $T(b\otimes e)=bT(1\otimes e)$.

> [!hint]- Hint 2: Construct the inverse and check balance
> Given $u:E\to F_A$, try $\widetilde u(b\otimes e)=bu(e)$. The relation $u(ae)=\varphi(a)u(e)$ is exactly the condition that this formula respects $b\varphi(a)\otimes e=b\otimes ae$.

## Solution

> [!success]- Independent proof of the natural isomorphism
> Define
>
> $$
> \begin{aligned}
> \Phi:\operatorname{Hom}_B(B\otimes_A E,F)&\longrightarrow\operatorname{Hom}_A(E,F_A),\\
> \Phi(T)(e)&=T(1\otimes e).
> \end{aligned}
> $$
>
> This is additive, and for $a\in A$,
>
> $$
> \Phi(T)(ae)=T(1\otimes ae)
> =T(\varphi(a)\otimes e)
> =\varphi(a)T(1\otimes e).
> $$
>
> Thus $\Phi(T)$ is $A$-linear for the specified action on $F_A$.
>
> Conversely, if $u:E\to F_A$ is $A$-linear, the map $(b,e)\mapsto bu(e)$ is additive in each variable and is $A$-balanced, because
>
> $$
> b\varphi(a)u(e)=bu(ae).
> $$
>
> The universal property of the tensor product therefore gives a unique additive map
>
> $$
> \Psi(u):B\otimes_A E\longrightarrow F,
> \qquad \Psi(u)(b\otimes e)=bu(e).
> $$
>
> It is $B$-linear: for $c\in B$, its values on $c(b\otimes e)$ and on $c\Psi(u)(b\otimes e)$ are both $cbu(e)$. The two constructions are inverse, since
>
> $$
> \Phi(\Psi(u))(e)=u(e),\qquad
> \Psi(\Phi(T))(b\otimes e)=bT(1\otimes e)=T(b\otimes e).
> $$
>
> Pure tensors generate the tensor product, so the second identity proves equality of maps. Both constructions preserve addition. In fact they are $B$-linear for the pointwise $B$-actions on the two Hom modules; the pointwise action on the right preserves $A$-linearity because $B$ is commutative.
>
> Finally, let $v:E'\to E$ be $A$-linear and $w:F\to F'$ be $B$-linear. Direct evaluation gives
>
> $$
> \Phi_{E',F'}\bigl(w\circ T\circ(1_B\otimes v)\bigr)
> =w\circ\Phi_{E,F}(T)\circ v.
> $$
>
> Hence the isomorphism is natural in both $E$ and $F$: contravariantly in $E$ and covariantly in $F$. This is the adjunction between extension and restriction of scalars.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Hom Functor|Hom Functor]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]

## Notes

- **Source and proof status:** [S2, Ch. XVI, Ex. 4, printed p. 637, PDF p. 652] was checked on the original page image. The explicit inverse maps and naturality verification are independent derivations.
- **Hypotheses:** Ring homomorphisms and modules are unital, as in the chapter. No freeness, finite generation, or injectivity of $\varphi$ is needed.
- **Method:** The only structural input is the defining universal property of the tensor product.
