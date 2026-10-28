---
title: "Exercise R467: Quadratic Gauss Sums over the Eisenstein Integers"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.11, Exercise 4.11.3, printed pp. 161–162, PDF pp. 175–176"
source_refs:
  - "S7/ch-4/sec-11/ex-3"
created: 2026-10-28
---

# Exercise R467: Quadratic Gauss Sums over the Eisenstein Integers

## Problem Statement

> [!question] Original Exercise 4.11.3
> For $b,d\in\mathbb Z$, $(3b,d)=1$, let $\phi_{b,d}=\sum_{v\in A/dA}e(b|v|^2/d)$. Prove $\phi_{b,d}=(d/3)d$.
>
> (a) Prove it for prime $d=p\ne3$. For $p=2$ compute directly. For $p>3$, use $\mathbb Z[\sqrt{-3}]/p\to A/pA$ to obtain $\phi_{b,p}=\sum_{r_1,r_2\ (p)}e(b(r_1^2+3r_2^2)/p)$. Show $\sum_{r\ (p)}e(mr^2/p)=(m/p)g(\chi)$ for $p\nmid m$, with $\chi(s)=(s/p)$, and $g(\chi)^2=(-1/p)p$. Complete the proof with Quadratic Reciprocity.
>
> (b) For $x\in N^{-1}B$, show $\sum_{w\in A/NA}e(\operatorname{tr}(xw^*))$ is $N^2$ if $x\in B$ and zero otherwise; show $\sum_{v\in B/NA}e(\operatorname{tr}(vx^*))$ is $3N^2$ if $x\in A$ and zero otherwise.
>
> (c) For $t\ge2$ expand $v+p^{t-1}w$ to show $\phi_{b,p^t}=p^2\phi_{b,p^{t-2}}$ and prove the formula inductively.
>
> (d) For $d=d_1d_2>0$, $(d_1,d_2)=1$, use $(u_1,u_2)\mapsto d_2u_1+d_1u_2$ to prove $\phi_{b,d}=\phi_{bd_2,d_1}\phi_{bd_1,d_2}$. Deduce the result for $d<0$ as well.

## Hints

> [!hint]- Hint 1
> The trace-dual of $A$ is $B$, and the trace-dual of $B$ is $A$.

> [!hint]- Hint 2
> In the prime-power expansion, orthogonality forces $v\equiv0\pmod p$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a)** Modulo two the norm $a^2-ab+b^2$ is zero at $(0,0)$ and one at the other three pairs. Since $b$ is odd, $\phi_{b,2}=1-3=-2=(2/3)2$. For odd $p\ne3$, the index of $\mathbb Z[\sqrt{-3}]$ in $A$ is two, invertible modulo $p$, so reduction is an isomorphism and the displayed diagonal norm expression follows.
>
> Every $s\in\mathbb F_p$ has $1+\chi(s)$ square roots (with $\chi(0)=0$). Therefore
> $$
> \sum_r e(mr^2/p)=\sum_s(1+\chi(s))e(ms/p)=\chi(m)g(\chi),
> $$
> because the unweighted character sum is zero and substitution $ms=t$ gives the last equality. Conjugating the Gauss sum gives $\overline{g(\chi)}=\chi(-1)g(\chi)$. Also
> $$
> |g(\chi)|^2=\sum_{t\ne0}\chi(t)\sum_{y\ne0}e((t-1)y/p)=p,
> $$
> since the inner sum is $p-1$ for $t=1$ and $-1$ otherwise, and $\sum_{t\ne0}\chi(t)=0$. Hence $g(\chi)^2=\chi(-1)p$. The product of the two diagonal one-dimensional sums is $\chi(b)\chi(3b)\chi(-1)p=(-3/p)p$. Quadratic Reciprocity gives $(-3/p)=(p/3)$, proving the prime case.
>
> **(b)** For the bilinear form $T(x,y)=\operatorname{tr}(xy^*)$, the Gram matrix on $1,\rho$ is $\begin{pmatrix}2&-1\\-1&2\end{pmatrix}$ of determinant three. Its integral dual lattice is $B=\alpha^{-1}A$, as direct multiplication verifies, and dualizing again gives $B^\vee=A$. Thus the first displayed exponential is a well-defined character on $A/NA$, trivial exactly for $x\in B$. The second is a character on $B/NA$, trivial exactly for $x\in A$. The assumption $Nx\in B$ ensures both are independent of lifts. A nontrivial finite-group character sums to zero: translate its sum by an element on which its value is not one. Trivial characters sum to the group orders, which are $N^2$ and $3N^2$ because $[B:A]=3$. This proves both formulas.
>
> **(c)** Split each class modulo $p^tA$ uniquely as $v+p^{t-1}w$ with $v\pmod{p^{t-1}A}$, $w\pmod{pA}$. For $t\ge2$, the quadratic $w$ term in the exponent is integral. The inner sum is
> $$
> \sum_{w\ (pA)}e(\operatorname{tr}(bvw^*)/p).
> $$
> By(b) it vanishes unless $bv\in pB$. Since $p\ne3$ and $b$ is a unit modulo $p$, the trace form is nondegenerate modulo $p$, so this is exactly $v\in pA$. In that case the sum is $p^2$. Write $v=pz$ to get $\phi_{b,p^t}=p^2\phi_{b,p^{t-2}}$. Together with $\phi_{b,1}=1$ and(a), induction gives $(p/3)^t p^t=(p^t/3)p^t$.
>
> **(d)** The map in the question is a bijection by the Chinese remainder theorem, because $d_1,d_2$ are units modulo each other's moduli. Expanding the norm, the cross term contributes the integer $b\operatorname{tr}(u_1u_2^*)$ to the phase, and the remaining terms separate as $bd_2|u_1|^2/d_1+bd_1|u_2|^2/d_2$. This proves the product formula. The prime-power evaluations then multiply to $(d/3)d$ for every positive $d$ coprime to $3b$. Finally $A/(-d)A=A/dA$ and $\phi_{b,-d}=\overline{\phi_{b,d}}=\phi_{b,d}$ because the evaluated sum is real. Also $(-d/3)(-d)=(d/3)d$, so the same formula holds for negative $d$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[06 - Representation Theory/Concepts/Characters|Characters]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 161–162 / PDF 175–176. The solution above is independently derived.
- **Routing:** The principal toolkit is ring-theory; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
