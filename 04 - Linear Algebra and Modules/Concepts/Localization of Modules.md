---
title: Localization of Modules
aliases:
  - Module Localization
  - Localized Module
topic: module-theory
tags:
  - concept
  - definition
  - module-theory
  - localization
created: 2026-08-29
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. III, Modules, Exercises 9-10, printed pp. 167-168, PDF pp. 182-183"
source_status: partially-verified
status: not-started
---

# Localization of Modules

## Definition

Let $A$ be a commutative ring, let $S\subseteq A$ be a multiplicatively closed set containing $1$, and let $M$ be an $A$-module. On $M\times S$, define

$$
(m,s)\sim(m',s')
$$

when there is some $t\in S$ such that

$$
t(s'm-sm')=0.
$$

The equivalence class of $(m,s)$ is written $m/s$, and the set of classes is the **localization** $S^{-1}M$.

The operations

$$
\frac{m}{s}+\frac{m'}{s'}=\frac{s'm+sm'}{ss'},
\qquad
\frac{a}{u}\frac{m}{s}=\frac{am}{us}
$$

make $S^{-1}M$ an $S^{-1}A$-module. The canonical map is

$$
\iota_M:M\longrightarrow S^{-1}M,
\qquad
m\longmapsto \frac{m}{1}.
$$

If $\mathfrak p$ is a prime ideal and $S=A\setminus\mathfrak p$, write

$$
M_{\mathfrak p}=S^{-1}M.
$$

## Intuition

Localization allows every element of $S$ to act invertibly. An equality $m/s=m'/s'$ need not hold after ordinary cross-multiplication: it is enough for the difference $s'm-sm'$ to be killed by a further denominator from $S$. This extra factor is essential when $A$ or $M$ has torsion.

## Universal Property

> [!abstract] Universal property
> Let $N$ be an $S^{-1}A$-module and let $f:M\to N$ be $A$-linear, where $A$ acts through $A\to S^{-1}A$. There is a unique $S^{-1}A$-linear map
>
> $$
> \widetilde f:S^{-1}M\longrightarrow N
> $$
>
> satisfying $\widetilde f(m/1)=f(m)$, namely
>
> $$
> \widetilde f(m/s)=s^{-1}f(m).
> $$

**Proof.** The defining equivalence relation makes the displayed formula well-defined. Additivity and $S^{-1}A$-linearity follow from the fraction rules. Every $m/s$ equals $(1/s)(m/1)$, so uniqueness is forced.

## Key Properties

### Vanishing criterion

$$
\frac{m}{s}=0
\quad\Longleftrightarrow\quad
tm=0\text{ for some }t\in S.
$$

Consequently, $\iota_M$ is injective exactly when no nonzero element of $M$ is annihilated by an element of $S$.

### Localization is exact

> [!abstract] Exactness
> If
>
> $$
> 0\longrightarrow M'\xrightarrow{f}M\xrightarrow{g}M''\longrightarrow0
> $$
>
> is exact, then
>
> $$
> 0\longrightarrow S^{-1}M'\xrightarrow{S^{-1}f}S^{-1}M
> \xrightarrow{S^{-1}g}S^{-1}M''\longrightarrow0
> $$
>
> is exact.

**Proof.** Surjectivity on the right follows by lifting the numerator of a fraction. If $f(m')/s=0$, then some $t\in S$ kills $f(m')$; injectivity of $f$ gives $tm'=0$, hence $m'/s=0$. If $g(m)/s=0$, some $t\in S$ satisfies $g(tm)=0$, so $tm=f(m')$ for some $m'\in M'$. Then

$$
\frac{m}{s}=\frac{tm}{ts}=\frac{f(m')}{ts},
$$

which proves exactness in the middle.

### Local detection

An element $m\in M$ is zero if and only if its image in $M_{\mathfrak m}$ is zero for every maximal ideal $\mathfrak m$. Likewise, a sequence of modules is exact if and only if it becomes exact after localization at every prime ideal. The proof applies the vanishing criterion to an annihilator ideal and then chooses a maximal ideal containing every proper ideal.

## Examples

> [!example] Fractions of an abelian group
> With $A=\mathbb Z$ and $S=\{1,p,p^2,\ldots\}$,
>
> $$
> S^{-1}\mathbb Z=\mathbb Z[1/p].
> $$

> [!example] Localization can kill torsion
> If $M=\mathbb Z/p\mathbb Z$ and $p\in S$, then $S^{-1}M=0$ because $p$ annihilates every element of $M$.

> [!example] Torsion-free modules over domains
> If $A$ is an integral domain, $M$ is torsion-free, and $0\notin S$, then $M\to S^{-1}M$ is injective.

## Related Concepts

- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Torsion Modules|Torsion Modules]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective Modules and Grothendieck Groups]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The construction and exercise statements were checked against Lang's original pages. Lang asks the reader to establish the module structure, exactness, and local criteria; the proofs in this note are independent derivations rather than textbook proofs.
