---
title: "Exercise Gal74: Two S3 Splitting Fields and Their Compositum"
topic: galois-theory
difficulty: advanced
status: completed
tags:
  - exercise
  - galois-theory
  - splitting-fields
  - cubic-discriminants
source: 2026 Chinese Academy of Sciences algebra advanced-class entrance examination, Problem 6; statement supplied by the user; linked web source not independently accessible
created: 2026-08-12
---

# Exercise Gal74: Two S3 Splitting Fields and Their Compositum

## Problem Statement

> [!question] 2026 entrance examination, Problem 6
> Let $K$ be the splitting field over $\mathbb Q$ of the irreducible polynomial
> $$
> f(x)=x^6-2x^3-2,
> $$
> and let
> $$
> L=\mathbb Q(\sqrt[3]2,\sqrt3,\sqrt{-3}).
> $$
> 
> (a) Prove that $L/\mathbb Q$ is Galois and $[L:\mathbb Q]=12$.
>
> (b) Prove that $L$ contains a unique real cubic subfield, namely $\mathbb Q(\sqrt[3]2)$.
>
> (c) Prove that $L\subset K$.
>
> (d) Put
> $$
> \alpha=\sqrt[3]{2+\sqrt3}+\sqrt[3]{2-\sqrt3},
> $$
> where the real cube roots are chosen. Prove that $\alpha\in K$ and that $\alpha$ is a root of the irreducible polynomial $x^3-3x-4$ over $\mathbb Q$.
>
> (e) Given that the roots $x_1,x_2,x_3$ of $x^3+bx+c$ satisfy
> $$
> (x_1-x_2)(x_1-x_3)(x_2-x_3)
> =\pm\sqrt{-4b^3-27c^2},
> $$
> prove that $\mathbb Q(\alpha)\ne\mathbb Q(\sqrt[3]2)$, and hence $K\ne L$.
>
> (f) Prove that $[K:\mathbb Q]=36$.
>
> (g) Prove that
> $$
> \operatorname{Gal}(K/\mathbb Q)\cong S_3\times S_3.
> $$

## Hints

> [!hint]- Hint 1
> First write $L$ as the compositum of the splitting field of $x^3-2$ and $\mathbb Q(\sqrt3)$.

> [!hint]- Hint 2
> If $a^3=1+\sqrt3$ and $b^3=1-\sqrt3$, choose the real roots. Then $ab=-\sqrt[3]2$.

> [!hint]- Hint 3
> Compare the quadratic subfields of the splitting fields of $x^3-2$ and $x^3-3x-4$ by computing their discriminants.

## Solution

> [!success]- Solution
> Write
> $$
> c=\sqrt[3]2,
> \qquad
> \omega=\frac{-1+\sqrt{-3}}2,
> \qquad
> A=\mathbb Q(c,\omega).
> $$
> The field $A$ is the splitting field of $x^3-2$. This polynomial is Eisenstein at $2$ and has nonsquare discriminant
> $$
> \Delta(x^3-2)=-108=-3\cdot6^2.
> $$
> Hence $[A:\mathbb Q]=6$, $\operatorname{Gal}(A/\mathbb Q)\cong S_3$, and its unique quadratic subfield is $\mathbb Q(\sqrt{-3})$. Since $\mathbb Q(\sqrt3)$ is a different quadratic field,
> $$
> A\cap\mathbb Q(\sqrt3)=\mathbb Q.
> $$
> Both factors are Galois, so
> $$
> L=A\mathbb Q(\sqrt3),
> \qquad
> [L:\mathbb Q]=12,
> \qquad
> \operatorname{Gal}(L/\mathbb Q)\cong S_3\times C_2.
> $$
> In particular, $L/\mathbb Q$ is Galois. This proves (a).
>
> A cubic intermediate field corresponds to a subgroup of order $4$ in $S_3\times C_2$. These are exactly
> $$
> H_j\times C_2,
> $$
> where $H_j$ runs through the three order-two subgroups of $S_3$. Their fixed fields are
> $$
> \mathbb Q(c),\qquad \mathbb Q(c\omega),\qquad \mathbb Q(c\omega^2).
> $$
> The latter two contain a nonreal generator and therefore are not subfields of $\mathbb R$, whereas $\mathbb Q(c)\subset\mathbb R$. Thus $\mathbb Q(c)$ is the unique real cubic subfield of $L$. This proves (b).
>
> Let $a,b$ be the real cube roots satisfying
> $$
> a^3=1+\sqrt3,
> \qquad
> b^3=1-\sqrt3.
> $$
> Since $(1+\sqrt3)(1-\sqrt3)=-2$ and $b<0<a$, one has
> $$
> ab=-c.
> $$
> The six roots of $f$ are
> $$
> a,\ a\omega,\ a\omega^2,
> \ b,\ b\omega,\ b\omega^2.
> $$
> Therefore $K=\mathbb Q(a,b,\omega)$. It contains
> $$
> c=-ab,
> \qquad
> \sqrt3=a^3-1,
> \qquad
> \sqrt{-3}=2\omega+1,
> $$
> and hence $L\subset K$. This proves (c).
>
> Set
> $$
> u=\sqrt[3]{2+\sqrt3},
> \qquad
> v=\sqrt[3]{2-\sqrt3},
> $$
> using real cube roots. Because
> $$
> a^6=(1+\sqrt3)^2=2(2+\sqrt3),
> \qquad
> b^6=(1-\sqrt3)^2=2(2-\sqrt3),
> $$
> the signs of $a,b$ give
> $$
> u=\frac{a^2}{c},
> \qquad
> v=\frac{b^2}{c}.
> $$
> Thus $u,v\in K$ and $\alpha=u+v\in K$. Moreover $uv=1$, so
> $$
> \alpha^3=u^3+v^3+3uv(u+v)=4+3\alpha.
> $$
> Hence $\alpha$ is a root of $p(x)=x^3-3x-4$. The rational-root test excludes all possible roots $\pm1,\pm2,\pm4$, so $p$ is irreducible. This proves (d).
>
> The discriminants of the two irreducible cubics are
> $$
> \Delta(x^3-2)=-108=-3\cdot6^2,
> $$
> and
> $$
> \Delta(p)=-4(-3)^3-27(-4)^2=-324=-1\cdot18^2.
> $$
> If $\mathbb Q(\alpha)=\mathbb Q(c)$, their normal closures would be equal. But the normal closure of $\mathbb Q(c)$ has unique quadratic subfield $\mathbb Q(\sqrt{-3})$, while that of $\mathbb Q(\alpha)$ has unique quadratic subfield $\mathbb Q(i)$. These fields are distinct, a contradiction. Therefore
> $$
> \mathbb Q(\alpha)\ne\mathbb Q(c).
> $$
> If $K=L$, then $\alpha\in K$ would lie in $L$; by (b), the real cubic field $\mathbb Q(\alpha)$ would have to equal $\mathbb Q(c)$. Hence $K\ne L$. This proves (e).
>
> Let $B$ be the splitting field of $p(x)$. Since $p$ is an irreducible cubic with nonsquare discriminant,
> $$
> B=\mathbb Q(\alpha,i),
> \qquad
> [B:\mathbb Q]=6,
> \qquad
> \operatorname{Gal}(B/\mathbb Q)\cong S_3.
> $$
> We claim that $K=AB$. First, $A\subset L\subset K$, and $B\subset K$ because $\alpha\in K$ and
> $$
> i=\frac{\sqrt{-3}}{\sqrt3}\in L.
> $$
> Hence $AB\subset K$.
>
> Conversely, $B$ contains all three conjugates
> $$
> u+v,\qquad \omega u+\omega^2v,
> \qquad \omega^2u+\omega v,
> $$
> and $A$ contains $\omega$. Hence the inverse Fourier formulas show that $AB$ contains $u$ and $v$. The field $AB$ therefore contains $c,u,v$ and also
> $$
> \sqrt3=u^3-2.
> $$
> Since $a^2=cu$ and $a^3=1+\sqrt3$, division gives
> $$
> a=\frac{1+\sqrt3}{cu}\in AB.
> $$
> Similarly,
> $$
> b=\frac{1-\sqrt3}{cv}\in AB.
> $$
> As $\omega\in A$, all six roots of $f$ lie in $AB$, so $K\subset AB$. Thus $K=AB$.
>
> The intersection $A\cap B$ is Galois over $\mathbb Q$, because both $A$ and $B$ are Galois. The only proper nontrivial normal subextension of an $S_3$ extension is its unique quadratic subfield. Those subfields are respectively $\mathbb Q(\sqrt{-3})$ and $\mathbb Q(i)$, so they do not agree. Also $A\ne B$. Therefore
> $$
> A\cap B=\mathbb Q.
> $$
> It follows that
> $$
> [K:\mathbb Q]=[AB:\mathbb Q]=6\cdot6=36,
> $$
> proving (f), and restriction yields
> $$
> \operatorname{Gal}(K/\mathbb Q)
> \cong\operatorname{Gal}(A/\mathbb Q)
> \times\operatorname{Gal}(B/\mathbb Q)
> \cong S_3\times S_3,
> $$
> proving (g).

## Related Concepts

- [[05 - Galois Theory/Concepts/Composita and Restriction Maps|Composita and Restriction Maps]]
- [[05 - Galois Theory/Concepts/Fundamental Theorem|Galois Correspondence]]
- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]
- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]

## Notes

The statement was supplied with this [source page](https://www.zhihu.com/question/2036857432807363161/answer/2039148535115944834); the page was not independently accessible during archival. All solutions above are independent derivations. The supplied prose contained a typographical error: $x^2-3$ is the minimal polynomial of $\sqrt3$, not of $\sqrt[3]2$.
