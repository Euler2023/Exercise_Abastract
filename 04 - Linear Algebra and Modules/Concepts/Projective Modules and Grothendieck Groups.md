---
title: Projective Modules and Grothendieck Groups
aliases:
  - Projective Modules
  - Grothendieck Groups of Modules
topic: module-theory
tags:
  - concept
  - definition
  - module-theory
  - projective-module
  - grothendieck-group
created: 2026-08-29
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. III, §4, printed pp. 137-139, PDF pp. 152-154; Exercises 11-13, printed pp. 168-169, PDF pp. 183-184"
source_status: partially-verified
status: not-started
---

# Projective Modules and Grothendieck Groups

## Definition

> [!info] Projective module
> An $A$-module $P$ is **projective** if every map from $P$ through a quotient lifts: whenever $g:M\twoheadrightarrow M''$ is surjective and $f:P\to M''$ is $A$-linear, there is $h:P\to M$ with $g\circ h=f$.

The following conditions are equivalent:

1. $P$ has the lifting property above.
2. Every short exact sequence ending in $P$ splits.
3. $P$ is a direct summand of a free module.
4. The covariant functor $\operatorname{Hom}_A(P,-)$ is exact.

### Why the conditions are equivalent

- A lift of $\operatorname{id}_P$ splits every surjection onto $P$.
- Applying this to a free presentation $F\twoheadrightarrow P$ writes $F\cong P\oplus Q$.
- $\operatorname{Hom}_A(F,-)$ is exact for free $F$, and exactness passes to direct summands.
- Exactness of $\operatorname{Hom}_A(P,-)$ gives the required lift across every surjection.

Thus projective modules are precisely the modules that behave like free modules with respect to lifting, even when they do not possess a basis.

## Finite Projective Modules

A projective module is **finite** when it is finitely generated. Equivalently, $P$ is finite projective if and only if it is a direct summand of a finite free module:

$$
P\oplus Q\cong A^n
$$

for some $Q$ and $n$.

> [!example] Free modules
> Every free module is projective. In particular, $A^n$ is finite projective.

> [!example] A non-projective module
> The $\mathbb Z$-module $\mathbb Z/n\mathbb Z$ with $n>1$ is not projective: otherwise the quotient $\mathbb Z\twoheadrightarrow\mathbb Z/n\mathbb Z$ would split, forcing a nonzero finite subgroup of $\mathbb Z$.

> [!example] Invertible ideals
> A nonzero fractional ideal of a Dedekind ring is a rank-one finite projective module. It need not be free; freeness is equivalent to the ideal class being principal.

## Grothendieck Constructions

Isomorphism classes of finite projective $A$-modules form a commutative monoid under direct sum:

$$
[P]+[Q]=[P\oplus Q].
$$

Its group completion is the usual projective Grothendieck group, commonly denoted $K_0(A)$ in modern notation. Lang denotes this first group by $K(A)$. Thus

$$
K_0^{\mathrm{modern}}(A)=K^{\mathrm{Lang}}(A).
$$

Lang then imposes **stable equivalence**:

$$
P\sim P'
\quad\Longleftrightarrow\quad
P\oplus F\cong P'\oplus F'
$$

for finite free modules $F,F'$, and denotes the resulting group by $K_0(A)$. Equivalently,

$$
K_0^{\mathrm{Lang}}(A)
=K^{\mathrm{Lang}}(A)/\langle[A]\rangle
\cong\widetilde K_0^{\mathrm{modern}}(A).
$$

The two $K_0$ conventions must not be silently identified.

For a suitable exact family of modules, one can instead start with the free abelian group on isomorphism classes and impose the relations

$$
[M]=[M']+[M'']
$$

for every short exact sequence

$$
0\longrightarrow M'\longrightarrow M\longrightarrow M''\longrightarrow0.
$$

For finite projective modules every such sequence splits, so this exact-sequence construction agrees with group completion of the direct-sum monoid.

## Dedekind Rings

> [!abstract] Structure theorem
> Let $\mathfrak o$ be a Dedekind ring with quotient field $K$. Every finitely generated torsion-free $\mathfrak o$-module $M$ is projective. If $M\ne0$ has rank $n$, then
>
> $$
> M\cong \mathfrak o^{\,n-1}\oplus\mathfrak a
> $$
>
> for a nonzero fractional ideal $\mathfrak a$. Its ideal class depends only on $M$, and Lang's reduced group satisfies
>
> $$
> K_0^{\mathrm{Lang}}(\mathfrak o)\cong\operatorname{Pic}(\mathfrak o).
> $$

**Proof status.** Lang states this chain as Exercises III.11-III.13. The vault exercise notes provide independent proofs. The case $M=0$ is separate, since the displayed expression presupposes $n\ge1$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Hom Functor|Hom Functor]]
- [[04 - Linear Algebra and Modules/Concepts/Localization of Modules|Localization of Modules]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The four projectivity criteria and Lang's two Grothendieck-group conventions were checked in Chapter III §4. The Dedekind classification is posed as an exercise rather than proved in the source; its use here is explicitly linked to independently derived exercise solutions.
