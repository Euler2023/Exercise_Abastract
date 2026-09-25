---
title: "Exercise AG23: Local Uniformization at a Rational Place"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
  - function-fields
  - discrete-valuations
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XII, Exercises, Exercise 18, printed p. 498, PDF p. 513"
created: 2026-09-25
---

# Exercise AG23: Local Uniformization at a Rational Place

## Problem Statement

> [!question] Lang, Chapter XII, Exercise 18 (Local uniformization)
> Let $k$ be a field, $K$ a finitely generated extension of transcendence degree $1$, and $\mathfrak o$ a discrete valuation ring of $K$ over $k$, with maximal ideal $\mathfrak m$. Assume that $\mathfrak o/\mathfrak m=k$. Let $x$ be a generator of $\mathfrak m$, and assume that $K$ is separable over $k(x)$. Show that there exists an element $y\in\mathfrak o$ such that $K=k(x,y)$, and also having the following property. Let $\varphi$ be the place on $K$ determined by $\mathfrak o$. Let $a=\varphi(x)$, $b=\varphi(y)$ (of course $a=0$). Let $f(X,Y)$ be the irreducible polynomial in $k[X,Y]$ such that $f(x,y)=0$. Then $D_2f(a,b)\ne0$.
>
> *Hint (source):* First write $K=k(x,z)$ with $z$ integral over $k[x]$, and let $z=z_1,\ldots,z_n$ be its conjugates over $k(x)$. Extend $\mathfrak o$ to a valuation ring $\mathfrak O$ of their splitting field. Write $z=a_0+a_1x+\cdots+a_rx^r+\cdots$ with $a_i\in k$, put $P_r(x)=a_0+\cdots+a_rx^r$, and set $y_i=(z_i-P_r(x))/x^r$. For sufficiently large $r$, $y_1$ has no pole at $\mathfrak O$ whereas $y_2,\ldots,y_n$ do. Express the irreducible polynomial of $(x,y_1)$ as $f(x,Y)=\psi_n(x)Y^n+\cdots+\psi_0(x)$ with $\psi_i(x)\in k[x]$, and factor it using the $y_i$ to deduce $D_2f(a,b)\ne0$.

> [!info] Meaning of “place” in this exercise
> Here $\varphi:K\to k\cup\{\infty\}$ is the valuation-ring residue map: $\varphi(t)=t+\mathfrak m$ for $t\in\mathfrak o$, and $\varphi(t)=\infty$ for $t\notin\mathfrak o$. The linked overview note distinguishes this convention from the convention in which a place is an equivalence class of absolute values.

## Hints

> [!hint]- Hint 1: Complete at $\mathfrak o$
> Since $x$ is a uniformizer and the residue field is $k$, successive subtraction of constants shows that every element of $\mathfrak o$ has an $x$-adic expansion in $k\lbrack\lbrack x\rbrack\rbrack$.

> [!hint]- Hint 2: Separate one conjugate
> Choose $r$ larger than the valuations of all nonzero differences $z_i-z_1$ for $i>1$. The transformed conjugate $y_1$ is integral, while the others have negative valuation.

> [!hint]- Hint 3: Reduce a factorization
> Write $f(x,Y)=u(Y-y_1)\prod_{i>1}(1-Y/y_i)$. Show that $u$ is a unit by using the integrality and primitiveness of $f$, then reduce modulo the extended valuation ring's maximal ideal.

## Solution

> [!success]- Complete derivation
> Since $x\in\mathfrak m$ generates the maximal ideal of a DVR, it has valuation $1$. Any nonzero polynomial in $x$ over $k$ has valuation equal to its smallest nonzero exponent, so $x$ is transcendental over $k$. Thus $K/k(x)$ is finite and, by hypothesis, separable. By the primitive element theorem choose $z_0$ with $K=k(x,z_0)$. Multiplying by a suitable nonzero polynomial in $k[x]$ clears denominators in a monic equation, giving $z\in K$ integral over $k[x]$ and still $K=k(x,z)$. Because the valuation ring $\mathfrak o$ contains $k[x]$ and is integrally closed, $z\in\mathfrak o$.
>
> The residue map $k\to\mathfrak o/\mathfrak m$ is an isomorphism. Successively subtract the constant residue and divide by $x$ to obtain a unique formal series $z=\sum_{j\ge0}a_jx^j$ in the completion $\widehat{\mathfrak o}\cong k\lbrack\lbrack x\rbrack\rbrack$. If $[K:k(x)]=1$, choose $y=0$; then $K=k(x,y)$ and $f(X,Y)=Y$ has $D_2f=1$. We therefore assume the degree $n\ge2$.
>
> Let $z=z_1,z_2,\ldots,z_n$ be the distinct conjugates over $k(x)$ in a finite normal extension $L$, and choose a valuation ring $\mathfrak O$ of $L$ above $\mathfrak o$. Every $z_i$ is integral over $k[x]$ and hence lies in $\mathfrak O$. Let $v$ denote the extended valuation, normalized by $v(x)=1$. Since $z_i\ne z_1$ for $i>1$, the finitely many values $v(z_i-z_1)$ are finite. Choose an integer $r$ larger than all of them and set
>
> $$
> P_r(x)=\sum_{j=0}^{r}a_jx^j,\qquad y_i=\frac{z_i-P_r(x)}{x^r}.
> $$
>
> The series expansion gives $v(z_1-P_r(x))\ge r+1$, so $v(y_1)\ge1$. For $i>1$, the ultrametric inequality and $v(z_i-z_1)<r<v(z_1-P_r(x))$ give $v(z_i-P_r(x))=v(z_i-z_1)<r$, so $v(y_i)<0$. In particular $y=y_1\in\mathfrak o$, and $z=P_r(x)+x^ry$ shows $K=k(x,y)$.
>
> Let $f(X,Y)\in k[X,Y]$ be the primitive irreducible equation of $(x,y)$, unique up to $k^\times$. It is not divisible by $X$, so $f(0,Y)$ is a nonzero polynomial. In $L[Y]$ factor
>
> $$
> f(x,Y)=\psi_n(x)\prod_{i=1}^{n}(Y-y_i)
> =u(Y-y_1)\prod_{i=2}^{n}\left(1-\frac{Y}{y_i}\right),
> \qquad u=\psi_n(x)\prod_{i=2}^{n}(-y_i).
> $$
>
> Each $1/y_i$ for $i>1$ has positive valuation, and $v(y_1)>0$. The coefficient of $Y$ on the right is $u\bigl(1+y_1\sum_{i>1}1/y_i\bigr)$, whose parenthetical factor is a unit. If $v(u)<0$, this coefficient has negative valuation, contradicting that every coefficient of $f(x,Y)$ lies in $k[x]\subseteq\mathfrak O$. If $v(u)>0$, every coefficient of $f(x,Y)$ has positive valuation, contradicting $f(0,Y)\ne0$. Thus $v(u)=0$. Reducing the factorization gives
>
> $$
> f(0,Y)=\bar u(Y-b),\qquad b=\varphi(y).
> $$
>
> Therefore $D_2f(a,b)=D_2f(0,b)=\bar u\ne0$. The coefficient $\bar u$ lies in $k^\times$ because $f(0,Y)\in k[Y]$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]
- [[03 - Field Theory/Concepts/Separable Extensions|Separable Extensions]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]

## Notes

- **Routing:** The construction turns a rational valuation of a one-variable function field into a smooth plane-curve chart; the primary toolkit is local geometry of curves.
- **Source and proof status:** [S2, Ch. XII, Exercise 18, printed p. 498, PDF p. 513]. The argument is independently derived from the source hint. Imported prerequisites are the primitive element theorem, extension of a valuation to a finite algebraic field extension, and elementary properties of a DVR's completion. The case $[K:k(x)]=1$ is handled separately because the printed hint begins with $n\ge2$.
- **Notation boundary:** The existing “Valuations and Places” overview distinguishes absolute-value equivalence classes from valuation-ring residue maps. The $\varphi$ used here is the residue-map form, defined explicitly above.
