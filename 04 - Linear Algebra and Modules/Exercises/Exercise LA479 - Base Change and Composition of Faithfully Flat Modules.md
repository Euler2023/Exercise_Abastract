---
title: "Exercise LA479: Base Change and Composition of Faithfully Flat Modules"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - flatness
  - extension-of-scalars
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVI, Exercise 10, printed p. 638, PDF p. 653"
created: 2026-09-29
---

# Exercise LA479: Base Change and Composition of Faithfully Flat Modules

## Problem Statement

> [!question] Lang, Chapter XVI, Exercise 10
> (a) Let $A\to B$ be a ring-homomorphism. If $M$ is faithfully flat over $A$, then $B\otimes_A M$ is faithfully flat over $B$.
>
> (b) Let $M$ be faithfully flat over $B$. Then $M$ viewed as $A$-module via the homomorphism $A\to B$ is faithfully flat over $A$ if $B$ is faithfully flat over $A$.

> [!info] Standing convention
> As in the preceding exercise, the rings are commutative and unital, and the ring homomorphism and module structures preserve the identity.

## Hints

> [!hint]- Hint 1: Rewrite the tensor functors
> For a $B$-module $N$, compare $(B\otimes_A M)\otimes_B N$ with $M\otimes_A N$. For an $A$-module $E$, compare $M\otimes_A E$ with $M\otimes_B(B\otimes_A E)$.

> [!hint]- Hint 2: Check both requirements
> Prove that each relevant tensor functor preserves injections and detects nonzero modules. In (a), restriction of scalars preserves injections and the underlying nonzero abelian group. In (b), compose the two faithfully flat tensor functors.

## Solution

> [!success]- Independent derivation from natural tensor isomorphisms
> Let $\varphi:A\to B$ denote the given homomorphism.
>
> **(a).** For every $B$-module $N$, define
>
> $$
> \alpha_N:(B\otimes_A M)\otimes_B N\longrightarrow M\otimes_A N,
> \qquad (b\otimes m)\otimes n\longmapsto m\otimes bn.
> $$
>
> The $A$-balancing relation is respected because $b\varphi(a)\otimes m=b\otimes am$ and $m\otimes\varphi(a)bn=am\otimes bn$. The $B$-balancing relation is respected because multiplication in $B$ is commutative. Its inverse is
>
> $$
> \beta_N(m\otimes n)=(1\otimes m)\otimes n.
> $$
>
> For its $A$-balancing, $(1\otimes am)\otimes n=(\varphi(a)\otimes m)\otimes n=(1\otimes m)\otimes\varphi(a)n$. On elementary tensors, $\alpha_N\beta_N$ is the identity, and
>
> $$
> \beta_N\alpha_N((b\otimes m)\otimes n)
> =(1\otimes m)\otimes bn=(b\otimes m)\otimes n.
> $$
>
> These maps are natural in $N$.
>
> Any injection $N'\hookrightarrow N$ of $B$-modules is also an injection of $A$-modules. Since $M$ is flat over $A$, the map $M\otimes_A N'\to M\otimes_A N$ is injective. Under the natural isomorphisms $\alpha$, this is exactly the map obtained by tensoring with $B\otimes_A M$ over $B$. Thus $B\otimes_A M$ is flat over $B$.
>
> If $N$ is a nonzero $B$-module, its underlying $A$-module is nonzero. Faithful flatness of $M$ gives $M\otimes_A N\ne0$, so the isomorphism above gives $(B\otimes_A M)\otimes_B N\ne0$. This proves faithful flatness over $B$.
>
> **(b).** For every $A$-module $E$, define a natural isomorphism
>
> $$
> \gamma_E:M\otimes_B(B\otimes_A E)\longrightarrow M\otimes_A E,
> \qquad m\otimes(b\otimes e)\longmapsto bm\otimes e.
> $$
>
> Its inverse sends $m\otimes e$ to $m\otimes(1\otimes e)$. The balancing relations and the two inverse identities follow directly from $bm\otimes(1\otimes e)=m\otimes(b\otimes e)$ and $\varphi(a)m\otimes e=m\otimes ae$.
>
> Let $E'\hookrightarrow E$ be an injection of $A$-modules. Flatness of $B$ over $A$ first gives an injection $B\otimes_A E'\hookrightarrow B\otimes_A E$ of $B$-modules. Flatness of $M$ over $B$ then gives an injection after tensoring with $M$ over $B$. Via $\gamma$, the latter is $M\otimes_A E'\hookrightarrow M\otimes_A E$, proving that the restricted $A$-module $M$ is flat.
>
> If $E\ne0$, faithful flatness of $B$ gives $B\otimes_A E\ne0$. Faithful flatness of $M$ over $B$ then gives $M\otimes_B(B\otimes_A E)\ne0$. The isomorphism $\gamma_E$ shows that $M\otimes_A E\ne0$, completing the proof.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Flat and Faithfully Flat Modules|Flat and Faithfully Flat Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA478 - Equivalent Criteria for Faithful Flatness|Exercise LA478]]

## Notes

- **Source and proof status:** Both parts were checked against [S2, Ch. XVI, Ex. 10, printed p. 638, PDF p. 653]. The solution independently constructs the tensor identifications and proves both flatness and detection of nonzero modules.
- **Boundary:** Part (a) puts no flatness assumption on $B$ over $A$. Part (b) needs faithful flatness of both successive scalar extensions, exactly as stated.
