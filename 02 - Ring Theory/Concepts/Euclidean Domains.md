---
title: Euclidean Domains
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
created: 2026-01-19
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, §12.2, printed pp. 360–367, PDF pp. 372–379; David S. Dummit and Richard M. Foote, Abstract Algebra, 3rd ed., §8.1, Proposition 5 and following Example, printed p. 277, PDF p. 290; §8.2, Proposition 9 and following Example, printed pp. 281–282, PDF pp. 294–295"
source_status: partially-verified
status: not-started
---

# Euclidean Domains

## Definition

> [!info] Definition (Euclidean Domain)
> An integral domain $R$ is a **Euclidean domain** if there exists a function $\phi: R \setminus \{0\} \to \mathbb{N}_0$ (called a **Euclidean function** or **norm**) such that for all $a, b \in R$ with $b \neq 0$:
>
> There exist $q, r \in R$ with:
> $$
> a = bq + r
> $$
> where either $r = 0$ or $\phi(r) < \phi(b)$.

## Intuition

Euclidean domains are integral domains where we can perform "division with remainder" just like in the integers. The Euclidean function measures the "size" of elements, and we can always reduce the remainder to something smaller.

## Key Properties

1. Every Euclidean domain is a PID (hence also a UFD)
2. The Euclidean algorithm works for computing $\gcd$
3. Extended Euclidean algorithm gives Bézout's identity
4. Not every PID is a Euclidean domain

## Examples

> [!example] Example 1: $\mathbb{Z}$
> With $\phi(n) = |n|$:
> - For any $a, b$ with $b \neq 0$: $a = bq + r$ with $0 \leq r < |b|$

> [!example] Example 2: $F[x]$ for Field $F$
> With $\phi(f) = \deg(f)$:
> - Polynomial long division: $a = bq + r$ with $\deg(r) < \deg(b)$

> [!example] Example 3: $\mathbb{Z}[i]$ (Gaussian Integers)
> With $\phi(a + bi) = a^2 + b^2$ (the norm):
> - This makes $\mathbb{Z}[i]$ a Euclidean domain

> [!example] Example 4: $\mathbb{Z}[\omega]$ where $\omega = e^{2\pi i/3}$
> The Eisenstein integers with norm $\phi(a + b\omega) = a^2 - ab + b^2$ form a Euclidean domain.

## Non-Examples

> [!warning] Non-Example: $\mathbb{Z}[\frac{1+\sqrt{-19}}{2}]$
> This is a PID but **not** a Euclidean domain for **any** Euclidean function. Dummit–Foote proves the two assertions separately: §8.1, printed p. 277 / PDF p. 290, and §8.2, printed pp. 281–282 / PDF pp. 294–295. Failure of the usual field norm to be Euclidean would not by itself establish this stronger conclusion.

Put $\theta=(1+\sqrt{-19})/2$, $R=\mathbb Z[\theta]$, and $K=\mathbb Q(\theta)$. Then $\theta^2-\theta+5=0$, and the multiplicative field norm is

$$
N(a+b\theta)=(a+b\theta)(a+b\bar\theta)
=a^2+ab+5b^2
=\left(a+\frac b2\right)^2+\frac{19b^2}{4}.
$$

For $a,b\in\mathbb Q$, this is the squared complex absolute value. On $R\setminus\{0\}$ it takes positive integer values. For a unit $a+b\theta\in R$, we have $a,b\in\mathbb Z$ and $N(a+b\theta)=1$; if $b\ne0$ its norm is at least $19/4>1$, while $b=0$ gives norm $a^2$. Consequently $R^\times=\{1,-1\}$.

> [!success]- Why no Euclidean function exists
> Suppose $\phi:R\setminus\{0\}\to\mathbb N_0$ were a Euclidean function. Choose a nonzero nonunit $\beta$ for which $\phi(\beta)$ is as small as possible. Such elements exist, since $2$ is a nonunit.
>
> For every $\alpha\in R$, Euclidean division gives $\alpha=q\beta+r$, where $r=0$ or $\phi(r)<\phi(\beta)$. By the choice of $\beta$, every nonzero remainder is a unit. Thus every element of $R/(\beta)$ is represented by $0,1$, or $-1$.
>
> Since $\beta$ is a nonunit, this quotient is a nonzero ring. It therefore has either two or three elements. A unital ring with a prime number $p$ of elements is $\mathbb F_p$: its additive group has order $p$, and the nonzero element $1$ generates that group, so the map $\mathbb Z\to R/(\beta)$ identifies the quotient with $\mathbb Z/p\mathbb Z$.
>
> But the image of $\theta$ must satisfy $X^2-X+5=0$. This polynomial has no root in either candidate field: its values at $0,1$ modulo $2$ are $1,1$, and its values at $0,1,2$ modulo $3$ are $2,2,1$. This is a contradiction.
>
> **Proof status:** This is an independent quotient-ring version of the minimal-nonunit argument in Dummit–Foote, §8.1, Proposition 5 and the following Example, printed p. 277 / PDF p. 290. It does not assume that $\phi$ is the field norm, multiplicative, or monotone under divisibility.

> [!success]- Why every ideal is principal: an elementary Dedekind–Hasse argument
> We first prove the following approximation statement: for every $x\in K\setminus R$, there exist $c,q\in R$ such that
> $$
> 0<N(cx-q)<1.
> $$
> Write $x=u+v\theta$ with $u,v\in\mathbb Q$. Choose $j\in\mathbb Z$ with $v=j+t$ and $|t|\le1/2$. If $|t|\le1/3$, put $m=1$ and $n=j$. Otherwise put $m=2$ and $n=2j+\operatorname{sgn}(t)$. In both cases $m\in\{1,2\}$ and $|mv-n|\le1/3$.
>
> Choose $k\in\mathbb Z$ with $|mu+(mv-n)/2-k|\le1/2$, and set $r=mx-(k+n\theta)$. Its real part has absolute value at most $1/2$, and its imaginary part has absolute value at most $\sqrt{19}/6$. Hence
> $$
> N(r)\le\frac14+\frac{19}{36}=\frac79<1.
> $$
> If $r\ne0$, take $c=m$ and $q=k+n\theta$.
>
> If $r=0$, then $m=2$, since $m=1$ would imply $x\in R$. Thus $z=2x\in R\setminus2R$. Using the basis $1,\theta$ and the relation $\theta^2-\theta+5=0$, we have
> $$
> R/2R\cong\mathbb F_2[X]/(X^2+X+1)\cong\mathbb F_4.
> $$
> The polynomial has no root in $\mathbb F_2$, so it is irreducible, and the nonzero image of $z$ has an inverse. Choose $c\in R$ with $cz\equiv1\pmod{2R}$ and put $q=(cz-1)/2\in R$. Then
> $$
> cx-q=\frac12,\qquad N(cx-q)=\frac14.
> $$
> This proves the approximation statement, including the zero-remainder case. In this last case $c$ may be any suitable element of $R$, not necessarily $1$ or $2$.
>
> Now let $I\ne(0)$ be an ideal of $R$, and choose $0\ne\beta\in I$ with $N(\beta)$ minimal. If some $\alpha\in I$ satisfied $x=\alpha/\beta\notin R$, the approximation statement would give $c,q\in R$ with $c\alpha-q\beta\in I$ and
> $$
> 0<N(c\alpha-q\beta)=N(\beta)N(cx-q)<N(\beta),
> $$
> contradicting minimality. Thus every $\alpha\in I$ is a multiple of $\beta$, so $I=(\beta)$. The zero ideal is $(0)$, and $R$ is a PID.
>
> **Proof status:** This is an independent elementary verification of the Dedekind–Hasse condition. The criterion and its sufficient direction are proved in Dummit–Foote, §8.2, Proposition 9, printed p. 281 / PDF p. 294. The book's following Example proves this particular ring is a PID by a different denominator-based calculation, printed p. 282 / PDF p. 295. The argument here proves its own approximation step and ideal-minimality step; it does not use Minkowski's theorem or a class-number table.

The distinction between the two properties is visible in the formulas: the PID argument permits a combination $c\alpha-q\beta$ with variable $c$, whereas Euclidean division requires a remainder of the form $\alpha-q\beta$.

> [!note] Source detail in the textbook's alternative proof
> On printed p. 282 / PDF p. 295, Dummit–Foote obtains $N(s\alpha/\beta-t)=(r^2+19)/c^2\le1/4+19/c^2$ and concludes that its construction works for $c\ge5$. The displayed upper bound alone is $101/100$ when $c=5$. In that boundary case one must also use the stated facts $r\in\mathbb Z$ and $|r|\le c/2$, giving $|r|\le2$ and hence $N(s\alpha/\beta-t)\le23/25<1$. For $c\ge6$ the displayed upper bound already suffices. This supplies the omitted rounding step; the textbook's conclusion is correct.

## The Euclidean Algorithm

> [!abstract] Euclidean Algorithm for $\gcd$
> To find $\gcd(a, b)$ where $b \neq 0$:
> 1. Divide: $a = bq_1 + r_1$
> 2. If $r_1 = 0$, then $\gcd(a,b) = b$
> 3. Otherwise, repeat with $(b, r_1)$
>
> This terminates because $\phi(r_i)$ strictly decreases.

> [!abstract] Extended Euclidean Algorithm
> The algorithm can be extended to find $x, y$ such that:
> $$
> \gcd(a, b) = ax + by
> $$
> (Bézout's identity)

## Theorems

> [!abstract] Euclidean $\Rightarrow$ PID
> Every Euclidean domain is a PID.
>
> *Proof idea*: For ideal $I \neq (0)$, take $b \in I$ with minimal $\phi(b)$. For any $a \in I$, write $a = bq + r$. Then $r = a - bq \in I$, so $r = 0$ (minimality), thus $I = (b)$.

## Hierarchy

```
Fields ⊂ Euclidean Domains ⊂ PIDs ⊂ UFDs ⊂ Integral Domains
```

Each inclusion is proper.

## Related Concepts

- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]


## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

This note has a named source with printed-page and physical-PDF-page provenance, and the cited bounded slice was checked for the core definitions or results used here. Because the note may also contain independent exposition or claims beyond that slice, its overall status remains partially verified unless a claim-level audit is recorded.

- **Verified textbook source for the non-example:** David S. Dummit and Richard M. Foote, *Abstract Algebra*, third edition, Wiley, 2004: §8.1, Proposition 5 and following Example, printed p. 277 / PDF p. 290; §8.2, Proposition 9 and following Example, printed pp. 281–282 / PDF pp. 294–295. The edition and these original PDF pages were visually checked. Both assertions are proved in the book, rather than merely assigned as exercises. The expanded proofs above are independent presentations of the stated methods.
- **Historical reference:** Th. Motzkin, [The Euclidean algorithm](https://doi.org/10.1090/S0002-9904-1949-09344-8), *Bulletin of the American Mathematical Society* **55** (1949), 1142–1146. This replaces the earlier unsupported parenthetical with a precise bibliographic pointer. The original article could not be directly inspected in this audit; the checked proof source for this note is Dummit–Foote, not a claimed reading of Motzkin's paper.
