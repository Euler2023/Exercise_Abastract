---
title: Flat and Faithfully Flat Modules
aliases:
  - Flat Modules
  - Faithfully Flat Modules
  - Flatness
  - Faithful Flatness
topic: module-theory
tags:
  - concept
  - definition
  - module-theory
  - flatness
created: 2026-09-29
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVI, §3, printed p. 613, PDF p. 628; Exercises 6–13, printed pp. 638–639, PDF pp. 653–654"
source_status: partially-verified
status: not-started
---

# Flat and Faithfully Flat Modules

## Definition

Throughout this note, $A$ is a commutative unital ring and modules are unital.

> [!info] Flat module
> An $A$-module $M$ is **flat** if tensoring with $M$ preserves every injection of $A$-modules:
>
> $$
> N'\hookrightarrow N
> \quad\Longrightarrow\quad
> M\otimes_A N'\hookrightarrow M\otimes_A N.
> $$
>
> Since tensor product is right exact, this is equivalent to saying that $M\otimes_A-$ is an exact functor.

> [!info] Faithfully flat module
> A module $M$ is **faithfully flat** if it is flat and
>
> $$
> M\otimes_A N=0\quad\Longrightarrow\quad N=0
> $$
>
> for every $A$-module $N$. Under the flatness hypothesis, this is equivalent to the tensor functor being faithful on morphisms.

Flatness says that tensoring does not introduce a new kernel into an inclusion. Faithful flatness adds the ability to detect whether a module or a homology module was already zero before tensoring. Thus it permits both preservation and reflection of exactness.

## Key Properties

### Basic constructions

Free modules are flat: for any set $J$,

$$
A^{(J)}\otimes_A N\simeq N^{(J)},
$$

and taking a direct sum of copies of an injection remains injective. More generally, a direct sum of modules is flat if and only if each summand is flat, since tensor product commutes with direct sums and the tensor map decomposes coordinatewise. A direct summand of a flat module is therefore flat. In particular, projective modules, which are direct summands of free modules, are flat.

If $M,N$ are flat, then $M\otimes_A N$ is flat: its tensor functor is naturally the composite of the two exact tensor functors. If $a\in A$ is not a zero-divisor, applying flatness to $A\xrightarrow{a}A$ shows that multiplication by $a$ is injective on any flat module. Over an integral domain, flat modules are consequently torsion-free; no converse over an arbitrary domain is asserted here.

### Criteria for faithful flatness

For a flat module $M$, the following are equivalent:

1. $M$ is faithfully flat.
2. Every nonzero homomorphism $u$ has $\operatorname{id}_M\otimes u\ne0$.
3. $M/\mathfrak mM\ne0$ for every maximal ideal $\mathfrak m$ of $A$.
4. A sequence is exact at its middle term if and only if its tensor with $M$ is exact there.

The maximal-ideal test uses $M\otimes_A A/I\simeq M/IM$: every nonzero module contains a cyclic module $A/I$, and a proper $I$ lies in a maximal ideal. Reflection of exactness applies detection of zero modules to $\ker g/\operatorname{im}f$, after detection of nonzero morphisms establishes $gf=0$. The complete argument is given in the linked exercise proofs.

For a homomorphism $A\to B$, faithful flatness is preserved by base change: $B\otimes_A M$ is faithfully flat over $B$ when $M$ is faithfully flat over $A$. It is also transitive: if $B$ is faithfully flat over $A$ and $M$ is faithfully flat over $B$, then $M$ is faithfully flat over $A$. The natural identifications are

$$
(B\otimes_A M)\otimes_B N\simeq M\otimes_A N,
\qquad
M\otimes_B(B\otimes_A E)\simeq M\otimes_A E.
$$

### Finite presentations and Lazard's theorem

If $E$ is flat, the natural map

$$
\operatorname{Hom}_A(P,M)\otimes_A E
\longrightarrow\operatorname{Hom}_A(P,M\otimes_A E)
$$

is injective for finitely generated $P$ and is an isomorphism for finitely presented $P$. A finite free presentation reduces the assertion to comparison of kernels; the second finite free term is what proves surjectivity.

> [!abstract] Lazard's theorem
> An $A$-module is flat if and only if it is a directed limit of finite free $A$-modules. Equivalently, every map $P\to E$ from a finitely presented module factors through a finite free module.

The transition maps in Lazard's theorem may have kernels. A directed limit of finite free modules need not be a union of finite free submodules of $E$. Constructing compatible transition maps is an essential part of the proof, not a consequence of choosing unrelated factorizations.

## Examples

> [!example] A nonempty free basis gives faithful flatness
> If $J\ne\varnothing$, then $A^{(J)}\otimes_A N\simeq N^{(J)}$ is zero precisely when $N=0$. Thus every free module with a nonempty chosen basis is faithfully flat. For example, $A[X]$ is faithfully flat as an $A$-module through its basis $1,X,X^2,\ldots$.

> [!example] Flat need not mean faithfully flat
> The module $\mathbb Q$ is flat over $\mathbb Z$: tensoring with it identifies with localization at the nonzero integers. Localization preserves injections, since a fraction becoming zero means that some denominator already kills its numerator, and an injection reflects that equation. But $\mathbb Q\otimes_{\mathbb Z}\mathbb Z/2\mathbb Z=0$, so $\mathbb Q$ is not faithfully flat. It is also not free over $\mathbb Z$: multiplication by $2$ is surjective on $\mathbb Q$, whereas it is not surjective on a nonzero free abelian group.

> [!example] A concrete failure of flatness
> For $n>1$, tensor the injection $\mathbb Z\xrightarrow{n}\mathbb Z$ with $\mathbb Z/n\mathbb Z$. It becomes the zero endomorphism of the nonzero module $\mathbb Z/n\mathbb Z$, which is not injective. Thus $\mathbb Z/n\mathbb Z$ is not flat over $\mathbb Z$.

> [!example] Detecting objects without flatness does not suffice
> Let $A=\mathbb Z/4\mathbb Z$ and $M=A/2A$. If $M\otimes_A N=N/2N=0$, then $N=2N=4N=0$, so this tensor functor detects zero modules. Nevertheless it sends the nonzero multiplication-by-$2$ map $A\to A$ to zero. It is not faithful on morphisms and $M$ is not flat: tensoring the injection $2A\hookrightarrow A$ gives a zero map with nonzero source $M\otimes_A2A\simeq M$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated and Finitely Presented Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Hom Functor|Hom Functor]]
- [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Direct and Inverse Limits]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The defining flatness criteria and the free, direct-sum, and projective-module statements were checked at [S2, Ch. XVI, §3, Proposition 3.1, printed p. 613, PDF p. 628]. The faithful-flatness, Hom comparison, and Lazard statements were checked at [S2, Ch. XVI, Exercises 9–13, printed pp. 638–639, PDF pp. 653–654]. These are exercise statements in the source, not proofs supplied there.

Complete independent derivations are in [[04 - Linear Algebra and Modules/Exercises/Exercise LA478 - Equivalent Criteria for Faithful Flatness|LA478]] for the faithful-flatness criteria, [[04 - Linear Algebra and Modules/Exercises/Exercise LA479 - Base Change and Composition of Faithfully Flat Modules|LA479]] for base change and composition, [[04 - Linear Algebra and Modules/Exercises/Exercise LA480 - Hom and Tensor Comparison for Finite Presentations|LA480]] for the Hom comparison, and [[04 - Linear Algebra and Modules/Exercises/Exercise LA482 - Lazard's Theorem on Flat Modules as Directed Limits|LA482]] for Lazard's theorem. The examples and elementary explanations above are independent deductions. The localization example uses the usual identification $S^{-1}A\otimes_A N\simeq S^{-1}N$, with $(a/s)\otimes n\mapsto an/s$ and inverse $n/s\mapsto(1/s)\otimes n$.
