---
title: "Exercise Rep165: Counting Eisenstein Character Triples"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.5, Exercise 4.5.3, printed p. 130, PDF p. 144"
source_refs:
  - "S7/ch-4/sec-5/ex-3"
created: 2026-10-28
---

# Exercise Rep165: Counting Eisenstein Character Triples

## Problem Statement

> [!question] Original Exercise 4.5.3
> Let $A_{N,k}$ be the triples $(\psi,\varphi,t)$ defined in the section: $\psi,\varphi$ primitive modulo $u,v$, $(\psi\varphi)(-1)=(-1)^k$, and $tuv\mid N$. Let $B_{N,k}$ be the pairs $(\psi',\varphi')$ of characters modulo $u',v'$, not necessarily primitive, with $u'v'=N$ and $(\psi'\varphi')(-1)=(-1)^k$. For such a pair let $u$ be the conductor of $\psi'$ and $\psi$ its primitive inducing character, and similarly define $v,\varphi$. Conversely let $\psi'_{u'}$ denote the lift of $\psi$ to a multiple $u'$ of $u$, and similarly for $\varphi'$.
>
> (a) Show that $(\psi,\varphi,t)\mapsto(\psi'_{tu},\varphi'_{N/(tu)})$ and $(\psi',\varphi')\mapsto(\psi,\varphi,u'/u)$ invert each other. Thus $|A_{N,k}|=|B_{N,k}|$.
>
> (b) Show that the number of pairs satisfying all the $B_{N,k}$ conditions except parity is $\sum_{d\mid N}\phi(d)\phi(N/d)$.
>
> (c) Use Lemma 4.3.2 to show $|B_{N,k}|=\dim E_k(\Gamma_1(N))$. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Conductor uniqueness proves that each lift is recovered by the reverse map.

> [!hint]- Hint 2
> Parity splits equally if at least one modulus exceeds $2$. Treat $N=1,2,4$ individually.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a).** A triple has $u'=tu$ and $v'=N/(tu)$; since $tuv\mid N$, $v\mid v'$. Thus both indicated lifts exist and their moduli multiply to $N$. Lifting preserves evaluation at $-1$, so parity is preserved. Conversely a pair has conductors $u\mid u'$, $v\mid v'$. With $t=u'/u$, $tuv=u'v\mid u'v'=N$, giving a valid triple with the same parity. Primitive inducing characters and their conductors are unique. Recovering them after the forward map returns $\psi,\varphi,u'/u=t$; applying the forward map after the reverse one returns the same characters at moduli $u',N/u'=v'$. The maps are inverse bijections.
>
> **(b).** Fix $u'=d$, $v'=N/d$. A finite abelian unit group of order $\phi(d)$ has exactly $\phi(d)$ characters, and the choices for the two moduli are independent, giving $\phi(d)\phi(N/d)$ pairs. Distinct $d$ specify distinct ordered modulus pairs, so summing over positive divisors gives the asserted total.
>
> **(c).** Lemma 4.3.2 says all characters at modulus $1$ or $2$ are even, while at any modulus greater than $2$ exactly half are even and half odd. If at least one of $d,N/d$ is greater than $2$, exactly half of the pairs at that factorization have either prescribed product parity: pair each character in that factor with its product by a fixed odd character. Thus for $N\notin\{1,2,4\}$,
> $$
> |B_{N,k}|=\frac12\sum_{d\mid N}\phi(d)\phi(N/d).
> $$
> Here $N=3$ or $N>4$. The Chapter 3 cusp formula gives this as the number of cusps of $\Gamma_1(N)$, and all these cusps are regular. Formula (4.3) for $k\ge3$ therefore gives exactly this dimension, for even or odd $k$.
>
> For the three exceptions, count directly. At $N=1$ there is one pair, even; at $N=2$ there are two pairs, both even. Their groups contain $-I$, so formula (4.3) gives dimensions respectively $1,2$ in even weight and $0$ in odd weight. At $N=4$, factorizations $(1,4)$ and $(4,1)$ each give one even and one odd pair, while $(2,2)$ gives one even pair. Thus the counts are $3$ in even weight and $2$ in odd weight. The group $\Gamma_1(4)$ has three cusps, precisely two regular and one irregular, so (4.3) again gives exactly those dimensions. This proves the equality in every positive level, without overlooking the unbalanced parity contribution at $(2,2)$.

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters]]
- [[06 - Representation Theory/Concepts/Representation Theory]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.5.3, printed p. 130 / PDF p. 144]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked inputs:** Lemma 4.3.2 is on printed p.118/PDF p.132; the $\Gamma_1(N)$ cusp count is on printed p.102/PDF p.116, with the unique irregular-cusp exception described on printed p.103/PDF p.117. The triple set and its range $k\ge3$ are on printed p.129/PDF p.143. This counting does not by itself prove linear independence of Eisenstein series.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
