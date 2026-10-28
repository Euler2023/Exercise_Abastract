---
title: "Exercise MF52: The Prime Three Correspondence at the Elliptic Point i"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.2, Exercise 5.2.9, printed p. 178, PDF p. 192"
source_refs:
  - "S7/ch-5/sec-2/ex-9"
created: 2026-10-28
---

# Exercise MF52: The Prime Three Correspondence at the Elliptic Point i

## Problem Statement

> [!question] Original Exercise 5.2.9
> Evaluate $T_3(SL_2(\mathbb Z)i)\in\operatorname{Div}(SL_2(\mathbb Z)\backslash\mathcal H^*)$, viewing $T_3$ in the sense of (5.5) and keeping an eye out for ramification. (A hint for this exercise is at the end of the book.)
>
> **Formula (5.5), printed p. 174 / PDF p. 188.** For the full modular group, $T_p$ sends $[\tau]$ to $\sum_{j=0}^{p-1}[(\tau+j)/p]+[p\tau]$, with repetitions retained.

## Hints

> [!hint]- Hint 1
> Start with the four representatives $i/3,(1+i)/3,(2+i)/3,3i$.

> [!hint]- Hint 2
> Reduce them using $S(z)=-1/z$ and $T(z)=z+1$. Two pairs give equal modular classes.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Write $[z]=SL_2(\mathbb Z)z$. The divisor formula gives
> $$
> T_3[i]=[i/3]+[(1+i)/3]+[(2+i)/3]+[3i].
> $$
> Applying $S$ to $i/3$ gives $3i$, so the first and last classes agree. Put $w=(1+3i)/2$. For the other two points, compute
> $$
> T^2S\left(\frac{1+i}{3}\right)
> =2-\frac3{1+i}=\frac{1+3i}{2}=w.
> $$
> Also
> $$
> TS\left(\frac{2+i}{3}\right)
> =1-\frac3{2+i}=\frac{-1+3i}{5},
> \qquad
> STS\left(\frac{2+i}{3}\right)
> =-\frac5{-1+3i}=w.
> $$
> Thus both middle classes are $[w]$. The two resulting points are distinct: $3i$ and $w$ lie in the closed modular fundamental region, but their imaginary parts are $3$ and $3/2$; the only identifications in that region are the boundary translations and unit-circle inversion, which preserve the imaginary part. This uses Lemma 2.3.2 [S7, printed p. 53 / PDF p. 68]. Hence
> $$
> \boxed{T_3[i]=2[3i]+2[(1+3i)/2].}
> $$
> The coefficients $2$ must not be dropped. One can also see the ramification directly: the effective stabilizer of $i$ has order $2$ and acts on the four order-three subgroups of $E_i[3]$. Its matrix acts on $\mathbb P^1(\mathbb F_3)$ by inversion with a minus sign. A fixed line would yield a root of $x^2=-1$ in $\mathbb F_3$, but the squares are $0,1$, so none exists. Therefore the four subgroups form two orbits of size $2$. They give the two points over $[i]$ in the intermediate correspondence, each with ramification index $2$, consistent with the repeated terms calculated above.

## Related Concepts

- [[07 - Modular Forms/Concepts/Hecke Operators]]
- [[07 - Modular Forms/Concepts/Cusp Forms]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.2.9, printed p. 178 / PDF p. 192]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Source context:** Formula (5.5) and its multiplicity convention were checked on printed p. 174 / PDF p. 188. Appendix A, printed p. 422 / PDF p. 433, points to the fundamental-region lemmas. The transformations and stabilizer calculation above are independent.
- **Multiplicity check:** The total degree is $4=3+1$, the number of prime-three representatives, while the support has only two points.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
