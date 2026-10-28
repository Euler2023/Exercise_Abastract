---
title: "Exercise MF47: The Full Level Graded Ring and Bases through Weight24"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.5, Exercise 3.5.3, printed p. 89, PDF p. 103"
source_refs:
  - "S7/ch-3/sec-5/ex-3"
created: 2026-10-28
---

# Exercise MF47: The Full Level Graded Ring and Bases through Weight24

## Problem Statement

> [!question] Original Exercise 3.5.3
> Prove Theorem 3.5.2. Write bases of $M_k(\operatorname{SL}_2(\mathbb Z))$ for all $k\le24$, expressing the basis elements as polynomials in $E_4$ and $E_6$. (A hint for this exercise is at the end of the book.)
>
> The theorem states: $M_0=\mathbb C$; $M_k=0$ for nonzero even $k<4$; $S_k=0$ for even $k<4$; and for even $k\ge4$,
> $$
> M_k=S_k\oplus\mathbb C E_k,\qquad
> \dim S_k=\begin{cases}\lfloor k/12\rfloor-1&k\equiv2\pmod{12},\\ \lfloor k/12\rfloor&\text{otherwise}.\end{cases}
> $$
> Moreover $M=\mathbb C[E_4,E_6]$ is a polynomial ring and $S=\Delta M$ is a principal ideal.

## Hints

> [!hint]- Hint 1
> Insert $g=0$, $\varepsilon_2=\varepsilon_3=\varepsilon_\infty=1$ in the even-weight dimension formula.

> [!hint]- Hint 2
> Use $E_4^3-E_6^2=1728\eta^{24}$ and divide cusp forms by $\eta^{24}$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> All unqualified spaces here are for $\operatorname{SL}_2(\mathbb Z)$. Odd weights vanish because $-I$ acts by $-1$. Weight zero consists of constants on the compact modular curve. Negative weights vanish: if a nonzero negative-weight form existed, a positive power of it times a suitable positive power of the nowhere-zero-on-$\mathcal H$ cusp form $\Delta$ would be a nonzero weight-zero cusp form, which is impossible. The dimension formula gives $M_2=0$ and, for even $k\ge4$,
> $$
> \dim M_k=1-k/2+\lfloor k/4\rfloor+\lfloor k/3\rfloor,\qquad \dim S_k=\dim M_k-1.
> $$
> Writing $k=12m+r$ with $r=0,2,4,6,8,10$ gives $\dim S_k=m-1$ for $r=2$ and $m$ otherwise. The constant-term map has kernel $S_k$ and sends the normalized $E_k$ to one; hence $M_k=S_k\oplus\mathbb C E_k$.
>
> Put $\delta=\eta^{24}=(E_4^3-E_6^2)/1728$. The book's $\Delta$ is a nonzero constant multiple of $\delta$, so either generates the same ideal. Since $\delta$ has no interior zeros and has a simple cusp zero, division by $\delta$ gives an isomorphism $S_k\simeq M_{k-12}$. For every even $k\ge4$, $k\ne2$, there is a monomial $m_k=E_4^aE_6^b$ of weight $k$ with constant term one: choose $b=0$ for $k\equiv0\pmod4$ and $b=1$ for $k\equiv2\pmod4$. For $F\in M_k$, subtract its constant term times $m_k$ and divide the remainder by $\delta$. Induction on $k$, starting with $M_0=\mathbb C$, $M_2=0$ and negative weights zero, proves $M=\mathbb C[E_4,E_6]$ and $S=\delta M=\Delta M$.
>
> There are exactly $\dim M_k$ pairs $(a,b)\in\mathbb Z_{\ge0}^2$ with $4a+6b=k$: writing $b$ with its prescribed parity gives the same six-residue count above. Thus these spanning monomials form a basis in each weight. No polynomial relation exists, since each homogeneous weighted part would be a linear relation among such a basis. The direct-sum grading therefore makes the ring a polynomial ring in two variables.
>
> The requested nonzero spaces through weight 24 have bases
>
> | $k$ | Basis |
> |---|---|
> | $0$ | $1$ |
> | $4$ | $E_4$ |
> | $6$ | $E_6$ |
> | $8$ | $E_4^2$ |
> | $10$ | $E_4E_6$ |
> | $12$ | $E_4^3,E_6^2$ |
> | $14$ | $E_4^2E_6$ |
> | $16$ | $E_4^4,E_4E_6^2$ |
> | $18$ | $E_4^3E_6,E_6^3$ |
> | $20$ | $E_4^5,E_4^2E_6^2$ |
> | $22$ | $E_4^4E_6,E_4E_6^3$ |
> | $24$ | $E_4^6,E_4^3E_6^2,E_6^4$ |
>
> All other $k\le24$, including negative and odd integers and $k=2$, have the empty basis.

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/Modular Functions|Modular Functions]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 89 / PDF 103. The solution above is independently derived.
- **Routing:** The principal toolkit is modular-forms; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
