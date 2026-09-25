---
title: "Exercise AG24: A Smooth Point Determines a Unique Valuation"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
  - function-fields
  - smooth-points
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XII, Exercises, Exercise 19, printed p. 498, PDF p. 513"
created: 2026-09-25
---

# Exercise AG24: A Smooth Point Determines a Unique Valuation

## Problem Statement

> [!question] Lang, Chapter XII, Exercise 19
> Prove the converse of Exercise 17, i.e. if $K=k(x,y)$, $f(X,Y)$ is the irreducible polynomial of $(x,y)$ over $k$, and if $a,b\in k$ are such that $f(a,b)=0$, but $D_2f(a,b)\ne0$, then there exists a unique valuation ring $\mathfrak o$ of $K$ with maximal ideal $\mathfrak m$ such that $x\equiv a$ and $y\equiv b\pmod{\mathfrak m}$. Furthermore, $\mathfrak o/\mathfrak m=k$, and $x-a$ is a generator of $\mathfrak m$.
>
> *Hint (source):* If $g(x,y)\in k[x,y]$ is such that $g(a,b)=0$, show that $g(x,y)=(x-a)A(x,y)/B(x,y)$ where $A,B$ are polynomials such that $B(a,b)\ne0$. If $A(a,b)=0$ repeat the process. Show that the process cannot be repeated indefinitely, and leads to a proof of the desired assertion.

> [!warning] Source issue: incorrect exercise cross-reference
> The printed opening says “converse of Exercise 17.” The converse described is to **Exercise 18**, which constructs a plane model smooth at a given rational valuation; Exercise 17 concerns Witt vectors. As a converse to Exercise 18, the assertion also needs its curve setting: $\operatorname{trdeg}_kK=1$ and $x$ transcendental over $k$, with $(f)$ the sole polynomial relation between $x$ and $y$. Without that inherited setting the claim is false; for example, if $K=k$ and $x=y=0$, the relation $f(X,Y)=Y$ has $D_2f(0,0)=1$ but $K$ has no nontrivial valuation ring over $k$.

> [!info] Meaning of “place” and the valuation ring
> The associated place is the residue map $\varphi:K\to k\cup\{\infty\}$, defined by $\varphi(t)=t+\mathfrak m$ for $t\in\mathfrak o$ and $\varphi(t)=\infty$ otherwise. The linked overview note distinguishes this convention from the absolute-value-equivalence usage of “place.”

## Hints

> [!hint]- Hint 1: Localize at the given point
> Let $A=k[x,y]$, let $\mathfrak m_0=(x-a,y-b)A$, and consider $B=A_{\mathfrak m_0}$.

> [!hint]- Hint 2: Use the nonzero partial derivative
> Write $f(X,Y)=(X-a)C(X,Y)+(Y-b)D(X,Y)$, with $D(a,b)=D_2f(a,b)\ne0$. In $B$ the element $D(x,y)$ is a unit, so $y-b$ is a multiple of $x-a$.

> [!hint]- Hint 3: Stop the division process
> Solve $f(a+t,Y(t))=0$ recursively in $k\lbrack\lbrack t\rbrack\rbrack$ with $Y(0)=b$. The resulting embedding $K\hookrightarrow k((t))$ bounds how often a nonzero element of $B$ can be divided by $x-a$.

## Solution

> [!success]- Complete derivation
> Work in the intended curve setting inherited from Exercise 18, as specified in the source-issue notice. Then $A=k[x,y]\cong k[X,Y]/(f)$, and $\mathfrak m_0=(x-a,y-b)A$ is the kernel of evaluation at $(a,b)$. Set $B=A_{\mathfrak m_0}$. It is a local domain with maximal ideal $\mathfrak m_0B$ and residue field $k$.
>
> Since $f(a,b)=0$, polynomial division by $X-a$ and $Y-b$ gives
>
> $$
> f(X,Y)=(X-a)C(X,Y)+(Y-b)D(X,Y),\qquad D(a,b)=D_2f(a,b)\ne0.
> $$
>
> The image of $D$ is a unit of $B$, and $f(x,y)=0$, so
>
> $$
> y-b=-(x-a)C(x,y)D(x,y)^{-1}\quad\text{in }B.
> $$
>
> Hence $\mathfrak m_0B=(x-a)B$. In particular, for $g\in A$ with $g(a,b)=0$, the displayed relation yields the factorization $g=(x-a)A_1/B_1$ with $A_1,B_1\in k[x,y]$ and $B_1(a,b)\ne0$ requested by Lang's hint.
>
> We still must show that repeated division stops. Put $t=X-a$. Because $D_2f(a,b)\ne0$, recursive comparison of coefficients gives a unique formal power series $Y(t)=b+\sum_{j\ge1}c_jt^j\in k\lbrack\lbrack t\rbrack\rbrack$ satisfying $f(a+t,Y(t))=0$: at each stage the new coefficient $c_j$ occurs linearly with nonzero coefficient $D_2f(a,b)$. Since $f$ is irreducible over $k(X)$, substitution $x\mapsto a+t$, $y\mapsto Y(t)$ defines a field embedding
>
> $$
> \iota:K=k(x,y)\hookrightarrow k((t)),\qquad \iota(x-a)=t.
> $$
>
> Every element of $B$ maps to $k\lbrack\lbrack t\rbrack\rbrack$, because a denominator in $A\setminus\mathfrak m_0$ has nonzero constant term at $(a,b)$. A nonzero $h\in B$ has a nonzero image with finite $t$-order $n$. If $n>0$, its residue in $B/\mathfrak m_0B=k$ is zero, hence $h\in(x-a)B$ and $h/(x-a)\in B$ has $t$-order $n-1$. Repeating exactly $n$ times gives $h=(x-a)^n u$ with $u\in B^\times$. Thus $B$ is a discrete valuation ring with uniformizer $x-a$, fraction field $K$, maximal ideal $(x-a)B$, and residue field $k$.
>
> Now suppose $\mathfrak o$ is any valuation ring of $K$ satisfying the required reductions of $x$ and $y$. It contains $A$. Every $g(x,y)\in A$ with $g(a,b)\ne0$ has nonzero residue and is a unit of $\mathfrak o$, so $B\subseteq\mathfrak o$. Any overring of a DVR in its fraction field is either that DVR or the whole field: if it contains an element of negative $B$-valuation, it contains $(x-a)^{-1}$ and hence all of $K$. The stipulated reduction $x\equiv a\pmod{\mathfrak m}$ makes $x-a$ a nonunit of $\mathfrak o$, so $\mathfrak o\ne K$. Therefore $\mathfrak o=B$, proving uniqueness.

## Related Concepts

- [[08 - Arithmetic Geometry/Exercises/Exercise AG23 - Local Uniformization at a Rational Place|Exercise AG23]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]

## Notes

- **Routing:** The calculation identifies the local ring of a smooth rational point on an affine curve with a DVR, so local geometry supplies the primary toolkit.
- **Source and proof status:** [S2, Ch. XII, Exercise 19, printed p. 498, PDF p. 513]. The source's cross-reference and implicit curve hypothesis are identified above. The localization, formal-series construction, finite-division argument, and uniqueness proof are independently derived. They use Gauss's lemma for irreducibility over $k(X)$ and coefficientwise formal implicit solving, which is proved in outline above.
- **Notation boundary:** The valuation-ring place is the explicitly defined residue map, not merely an equivalence class of absolute values.
