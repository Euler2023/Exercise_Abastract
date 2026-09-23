---
title: Primary Ideals and Primary Decomposition
aliases:
  - Primary Ideals
  - Primary Submodules
  - Primary Decomposition
  - Reduced Primary Decomposition
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
  - module-theory
  - primary-decomposition
created: 2026-09-22
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. X, §3, printed pp. 421-424, PDF pp. 436-439"
source_status: verified
status: not-started
---

# Primary Ideals and Primary Decomposition

## Definition

Throughout, $A$ is a commutative ring with identity and modules are unital $A$-modules.

> [!info] Primary submodule: Lang's convention
> A submodule $Q$ of an $A$-module $M$ is **primary** if $Q\ne M$ and, for every $a\in A$, multiplication by $a$ on $M/Q$ is either injective or nilpotent.
>
> Nilpotence here means that for some $n\ge1$,
>
> $$
> a^n(M/Q)=0,
> \qquad\text{equivalently}\qquad a^nM\subseteq Q.
> $$
>
> The exponent may depend on $a$, but it is uniform over all elements of $M/Q$.

This is the definition on [S2, Ch. X, §3, printed p. 421, PDF p. 436]. In particular, it applies without assuming that $M$ is finitely generated.

> [!info] Primary ideal and its prime
> A proper ideal $\mathfrak q\subset A$ is **primary** if
>
> $$
> ab\in\mathfrak q,\quad a\notin\mathfrak q
> \quad\Longrightarrow\quad
> b^n\in\mathfrak q\text{ for some }n\ge1.
> $$
>
> Its radical
>
> $$
> \mathfrak p=\sqrt{\mathfrak q}
> =\{b\in A:b^n\in\mathfrak q\text{ for some }n\ge1\}
> $$
>
> is prime, and $\mathfrak q$ is called **$\mathfrak p$-primary**.

For ideals, the two definitions agree by taking $M=A$. If multiplication by $b$ on $A/\mathfrak q$ is noninjective, there is $a\notin\mathfrak q$ with $ab\in\mathfrak q$; the ideal criterion gives $b^n\in\mathfrak q$, which annihilates the entire quotient. The reverse implication follows immediately from a nonzero kernel element.

> [!info] Primary decomposition and reducedness
> A **primary decomposition** of $N\subseteq M$ is an expression
>
> $$
> N=Q_1\cap\cdots\cap Q_r
> $$
>
> as a finite intersection of primary submodules. It is **reduced** if their belonging primes are pairwise distinct and no component can be omitted without changing the intersection.

For a primary submodule $Q$, the belonging prime is

$$
\mathfrak p_Q
=\{a\in A:a^nM\subseteq Q\text{ for some }n\ge1\}
=\sqrt{\operatorname{Ann}_A(M/Q)}.
$$

The intersection with no components is understood as $M$ when a decomposition of $M$ itself is needed. The substantive primary-decomposition statements concern proper submodules.

## Intuition

A prime ideal describes a quotient with no nonzero zero divisors. A primary ideal allows zero divisors in the quotient, but requires every such zero divisor to be nilpotent. Its radical records the underlying prime behavior while the primary ideal retains the nilpotent structure.

For modules, this becomes a condition on scalar multiplication: a scalar either loses no information, because multiplication is injective, or some power of that scalar kills the whole quotient. A primary decomposition expresses a submodule through finitely many quotients having this controlled scalar behavior.

## Key Properties

### The belonging ideal is prime

The set $\mathfrak p_Q$ is the radical of the annihilator ideal, hence is an ideal. Explicitly, if $a^r$ and $b^s$ annihilate $M/Q$, the binomial expansion shows that $(a+b)^{r+s-1}$ does too; scalar multiples also preserve the property. It is proper since $Q\ne M$.

Suppose $ab\in\mathfrak p_Q$ and $a\notin\mathfrak p_Q$. Multiplication by $a$ is then injective, as are all its powers. For some $n$,

$$
a^nb^n(M/Q)=0.
$$

Injectivity of multiplication by $a^n$ implies $b^n(M/Q)=0$, so $b\in\mathfrak p_Q$. This proves primality. It also shows that if $ax\in Q$ and $x\notin Q$, then $a\in\mathfrak p_Q$.

### Finite intersections with the same prime

If $Q_1,\ldots,Q_r$ are all $\mathfrak p$-primary, their intersection $Q$ is $\mathfrak p$-primary. For $a\notin\mathfrak p$, the implications $ax\in Q_i\Rightarrow x\in Q_i$ hold for every $i$, hence also for the intersection. For $a\in\mathfrak p$, choose exponents $n_i$ with $a^{n_i}M\subseteq Q_i$; their maximum gives $a^nM\subseteq Q$. Thus the belonging prime is exactly $\mathfrak p$. This is Lang's Proposition 3.1 [S2, printed p. 421, PDF p. 436].

Grouping components with the same prime and then discarding redundant components therefore turns any given finite primary decomposition into a reduced one.

### Quotient correspondence

If $N\subseteq Q\subseteq M$, the canonical isomorphism

$$
(M/N)/(Q/N)\cong M/Q
$$

intertwines every scalar multiplication. Hence $Q$ is primary in $M$ if and only if $Q/N$ is primary in $M/N$, and the belonging prime is unchanged. The correspondence also preserves finite intersections and strict containment, so it preserves primary decompositions and reducedness. This is the quotient discussion on [S2, printed p. 422, PDF p. 437].

### A finite generating set gives a uniform ideal power

If a finitely generated ideal $I=(a_1,\ldots,a_t)$ is contained in $\sqrt J$, choose $e_i\ge1$ with $a_i^{e_i}\in J$. Then

$$
I^{\,1+\sum_i(e_i-1)}\subseteq J,
$$

because every generating monomial of that degree contains one of the powers $a_i^{e_i}$. In particular, in a Noetherian ring every $\mathfrak p$-primary ideal contains a positive power of $\mathfrak p$. This argument is an independent derivation used in the linked exercises; it does not assert that every power of every prime is primary.

### Localization

For a multiplicative set $S$ and a $\mathfrak p$-primary ideal $\mathfrak q$, the two conditions $S\cap\mathfrak q=\varnothing$ and $S\cap\mathfrak p=\varnothing$ are equivalent. If $s\in S\cap\mathfrak p$, some power of $s$ belongs to both $S$ and $\mathfrak q$, proving the nontrivial implication.

Under these conditions, $S^{-1}\mathfrak q$ is $S^{-1}\mathfrak p$-primary and contracts back to $\mathfrak q$. The key point is that $sa\in\mathfrak q$ with $s\in S$ forces $a\in\mathfrak q$: otherwise primaryness would put a power of $s$ in $\mathfrak q$. Applying the fraction membership criterion then proves primaryness after localization. The complete extension-contraction and reducedness arguments are independently supplied in the linked exercise notes.

## Primary Decomposition for Noetherian Modules

> [!abstract] Lang, Theorem 3.3
> Let $M$ be a Noetherian $A$-module and let $N$ be a submodule. Then $N$ admits a primary decomposition. [S2, Ch. X, §3, printed p. 423, PDF p. 438]

Here is the source argument with the endomorphism step made explicit. If some submodule has no primary decomposition, the ascending chain condition gives a maximal such submodule $N$. The submodule $N$ is proper and is not primary, so there is $a\in A$ whose action $T$ on $M/N$ is neither injective nor nilpotent.

The ascending chain of kernels $\ker T\subseteq\ker T^2\subseteq\cdots$ stabilizes. Choose $n\ge1$ after stabilization and put $\varphi=T^n$, so

$$
\ker\varphi^2=\ker\varphi.
$$

If $x\in\ker\varphi\cap\operatorname{im}\varphi$, write $x=\varphi(y)$. Then $\varphi^2(y)=0$, hence $y\in\ker\varphi$ and $x=0$. Thus

$$
\ker\varphi\cap\operatorname{im}\varphi=0.
$$

Both submodules are nonzero: $T$ is noninjective, and no power of $T$ is zero. Their inverse images in $M$ strictly contain $N$ and have intersection $N$. By maximality, both inverse images have primary decompositions; combining those decompositions gives one for $N$, a contradiction.

This theorem only assumes that $M$ is Noetherian as a module; it does not require an additional Noetherian hypothesis on the coefficient ring.

## Examples

> [!example] Prime powers in the integers
> If $p$ is a prime number and $r\ge1$, the ideal $(p^r)\subset\mathbf Z$ is $(p)$-primary. If $p^r\mid ab$ but $p^r\nmid a$, the exponent of $p$ in $a$ is less than $r$, so $p\mid b$ and $p^r\mid b^r$. Its radical is $(p)$.

> [!example] A reduced decomposition with an embedded prime
> In $A=k[x,y]$,
>
> $$
> (x^2,xy)=(x)\cap(x^2,y).
> $$
>
> To verify the nontrivial inclusion, write an element of the intersection as $xh=x^2u+yv$. Setting $y=0$ shows that $h(x,0)$ is divisible by $x$, so $h=xw+yz$ for some polynomials $w,z$; hence $xh\in(x^2,xy)$.
>
> The ideal $(x)$ is prime. The quotient by $(x^2,y)$ is $k[x]/(x^2)$, in which an element with nonzero constant term is a unit and an element with zero constant term is nilpotent. Thus $(x^2,y)$ is $(x,y)$-primary.
>
> The radicals $(x)$ and $(x,y)$ are distinct. The witnesses $y\in(x^2,y)\setminus(x)$ and $x\in(x)\setminus(x^2,y)$ show irredundancy. The prime $(x,y)$ is called embedded because it strictly contains the other belonging prime.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Nilpotent and Idempotent Elements|Nilpotent and Idempotent Elements]]
- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Quotient Modules|Quotient Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Noetherian Modules|Noetherian Modules]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- Definitions of primary submodules, primary ideals, and belonging primes, Proposition 3.1, reducedness, quotient correspondence, and Theorem 3.3 were checked directly against rendered pages [S2, Ch. X, §3, printed pp. 421-424, PDF pp. 436-439].
- The existence theorem's proof above follows Lang's source-contained argument, with the kernel/image intersection explained explicitly. The radical-power argument, examples, and exercise applications are independently derived.
- The definition of a primary submodule uses nilpotence of the scalar endomorphism on the entire quotient. For an arbitrary module, it must not be weakened to an assertion allowing the exponent to vary with the individual module element.
- This note does not assert uniqueness of every primary component. Lang's Theorem 3.2 distinguishes the belonging primes and the components for isolated primes; arbitrary embedded components need not be unique.
